// ไฟล์: server/routes/maintenanceRoutes.js
const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance'); 

// @route   POST /api/maintenance
// @desc    สร้างคำขอแจ้งซ่อมใหม่
router.post('/', async (req, res) => {
    try {
        const newRequest = await Maintenance.create(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @route   GET /api/maintenance
// @desc    ดึงรายการแจ้งซ่อมทั้งหมด (สำหรับหน้าจอหลัก)
router.get('/', async (req, res) => {
    try {
        // ดึงข้อมูลพร้อม Populate Tenant/Property (เพื่อแสดงชื่อ/ห้อง)
        const requests = await Maintenance.find()
            .populate('tenant', 'firstName lastName')
            .populate('property', 'roomNumber');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   PUT /api/maintenance/:id/status
// @desc    อัปเดตสถานะคำขอซ่อม (Pending -> In progress -> Completed)
router.put('/:id/status', async (req, res) => {
    try {
        const updatedRequest = await Maintenance.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status, completedDate: req.body.status === 'Completed' ? new Date() : null },
            { new: true }
        );
        res.json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;