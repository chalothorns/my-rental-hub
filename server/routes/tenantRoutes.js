// ไฟล์: server/routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant'); // 👈 ดึง Tenant Schema ที่คุณสร้างไว้มาใช้
const Property = require('../models/Property');
const Lease = require('../models/Lease');

// @route   POST /api/tenants
// @desc    สร้างผู้เช่าใหม่
router.post('/', async (req, res) => {
    try {
        // ใช้ Tenant.create() เพื่อสร้างและบันทึกข้อมูลเข้า MongoDB
        const newTenant = await Tenant.create(req.body);

        // 💡 OPTIONAL: ถ้ามีการผูก currentProperty ในการสร้าง ให้ตั้งสถานะห้องเป็น Occupied
        if (newTenant.currentProperty) {
            await Property.findByIdAndUpdate(
                newTenant.currentProperty,
                { status: 'Occupied', currentTenant: newTenant._id}
            );
        }

        // ส่งข้อมูลที่บันทึกสำเร็จกลับไป
        res.status(201).json(newTenant); 
        } catch (error) {
        // จัดการ Error ที่อาจเกิดจากการเชื่อมต่อ DB
        console.error(error);
        res.status(500).json({ message: 'Server Error: Cannot save tenant data' });
    }
});

// @route  GET /api/tenants
// @desc ดึงรายการผู้เช่าทั้งหมด
router.get('/', async (req, res) => {
    try {
        const tenants = await Tenant.find()
        .sort({lastName: 1}) //เรียงตามนามสกุล
        // Populate เพื่อดึงข้อมูลห้องเช่าและสัญญามาแสดงผล
        .populate('currentProperty','roomNumber')
        .populate('leaseAgreement','monthlyRent startDate endDate');

        res.json(tenants);
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

//@route PUT/api/tenants/:id
//@desc  อัปเดตข้อมูลผู้เช่า
router.put('/:id',async(req,res) =>{
    try{
        const updatedTenant = await Tenant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true } //runValidators: บังคับให้ตรวจสอบ schema ก่อนอัปเดต
        );
        if(!updatedTenant){
            return res.status(404).json({message: 'Tenant not found'});
        }

        res.json(updatedTenant);
    } catch (error){
        res.status(400).json({message: error.message});
    }
})

module.exports = router;