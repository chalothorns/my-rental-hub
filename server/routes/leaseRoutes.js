// ไฟล์: server/routes/leaseRoutes.js
const express = require('express');
const router = express.Router();
const Lease = require('../models/Lease'); 
const Property = require('../models/Property'); // ต้องใช้เพื่ออัปเดตสถานะห้อง


// @route   GET /api/leases
// @desc    ดึงรายการสัญญาเช่าทั้งหมด
router.get('/', async (req, res) => {
    try {
        const leases = await Lease.find()
            .sort({ startDate: -1 }) // เรียงตามวันเริ่มต้นสัญญา
            // ดึงข้อมูลผู้เช่าและห้องพักที่เกี่ยวข้อง
            .populate('tenant', 'firstName lastName phone')
            .populate('property', 'roomNumber');

        res.json(leases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
// @route   POST /api/leases
// @desc    สร้างสัญญาเช่าใหม่ (Activate Lease)
router.post('/', async (req, res) => {
    try {
        // 1. สร้างสัญญา
        const newLease = await Lease.create(req.body);

        // 2. อัปเดตสถานะห้องให้เป็น 'ไม่ว่าง' (Occupied)
        await Property.findByIdAndUpdate(
            req.body.property, // ใช้ Property ID จาก Body
            { status: 'Occupied',
             currentTenant: req.body.tenant },
             {new: true}
        );

        res.status(201).json(newLease);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @route   PUT /api/leases/:id/close 
// @desc    ปิดสัญญาเช่า (Check-out)
router.put('/:id/close', async (req, res) => {
    try {
        // 1. ปิดสถานะสัญญา
        const closedLease = await Lease.findByIdAndUpdate(
            req.params.id, 
            { isActive: false, endDate: new Date() }, //คือถ้า isActive เป็น false และกำหนด endDate เป็น วันที่ปัจจุบัน (
            { new: true } //ให้คืนค่าเอกสารที่ถูกอัปเดตแล้ว (ข้อมูลใหม่) กลับมาเก็บในตัวแปร closedLease
        );
          //เป็นการบอกว่าถ้าค้นหาด้วย id ไม่เจอหรือเปนค่าว่าง ให้ส่งข้อความ error
        if (!closedLease) {
            return res.status(404).json({message: 'Lease not found'});
        }
            // 2. อัปเดตสถานะห้องให้เป็น 'Vacant' และลบผู้เช่า
             await Property.findByIdAndUpdate(
                closedLease.property,
                { 
                    status: 'Vacant',
                    currentTenant: null
                 },
            );
        

        res.json(closedLease);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;