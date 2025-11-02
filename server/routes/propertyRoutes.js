// ไฟล์: server/routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// @route   POST /api/properties
// @desc    เพิ่มห้อง/ทรัพย์สินใหม่
router.post('/', async (req, res) => {
    try {
        const newProperty = await Property.create(req.body);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @route   GET /api/properties
// @desc    ดึงข้อมูลห้องทั้งหมด (ใช้แสดงในหน้า Meters)
router.get('/', async (req, res) => {
    try {
        // 💡 เพิ่ม .populate() เพื่อดึงชื่อผู้เช่าปัจจุบันมาแสดง
        const properties = await Property.find()
        .populate('currentTenant', 'firstName lastName phone');


        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;