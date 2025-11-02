// File: server/models/Expense.js

const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['Repair', 'Taxes', 'Utility', 'Admin', 'Other'],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    // อ้างอิงถึงงานซ่อม (ถ้ามี)
    maintenanceRequest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maintenance',
        default: null
    },
    // อ้างอิงถึงห้องพัก (ถ้ามี)
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        default: null
    }
}, {
    timestamps: true
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;