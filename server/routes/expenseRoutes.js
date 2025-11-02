// ไฟล์: server/routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// @route   POST /api/expenses
// @desc    บันทึกรายการรายจ่ายใหม่
router.post('/', async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @route   GET /api/expenses
// @desc    ดึงรายการรายจ่ายทั้งหมด (ใช้แสดงในหน้า Analytics)
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ date: -1 }) // เรียงตามวันที่ล่าสุด
        // 💡 เพิ่ม .populate() เพื่อเชื่อมโยงข้อมูล
            .populate('property')
            .populate('maintenanceRequest');
        
        
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;