// ไฟล์: server/routes/billingRoutes.js
const express = require('express');
const router = express.Router();
const Billing = require('../models/Billing');


// @route   POST /api/billing
// @desc    สร้างรายการบิลใหม่ (ใช้เมื่อสร้างบิลรายเดือน หรือบันทึกการจ่ายเงิน)
router.post('/', async (req, res) => {
    try {
        // ใช้ Billing.create() เพื่อบันทึกข้อมูลบิลใหม่จาก Frontend
        const newBilling = await Billing.create(req.body);
        res.status(201).json(newBilling);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// @route   GET /api/billings
// @desc    ดึงรายการบิลทั้งหมด (ใช้แสดงใน Dashboard และ Financial Analytics)
router.get('/', async (req, res) => {
    try {
        const billings = await Billing.find()
              .sort({ billingDate: -1 }) // เรียงตามวันที่ออกบิลล่าสุด
            // ✅ ใช้ populate เพื่อดึงข้อมูลจริงของ Tenant และ Property
            .populate('tenant', 'firstName lastName')
            .populate('property', 'roomNumber');
            
        res.json(billings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// @route   PUT /api/billings/:id/status
// @desc    อัปเดตสถานะการจ่ายเงินของบิล
router.put('/:id/status', async (req, res) => {
    try {
        const { status, paymentDate} = req.body;

        const updatedBilling = await Billing.findByIdAndUpdate(
            req.params.id,
            {status: status, paymentDate: paymentDate || null},
            {new: true} //ให้คืนค่าเอกสารที่ถูกอัปเดตกลับมา
        );

        if (!updatedBilling) {
            return res.status(404).json({message: 'Bill not found'});
        }

        res.json(updatedBilling);
    } catch(error) {
        res.status(400).json({message: error.message});
    }

    
});
module.exports = router;