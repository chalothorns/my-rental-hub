const mongoose = require('mongoose');

// กำหนด Schema สำหรับ Property
const PropertySchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true, // ทำให้เลขห้องไม่ซ้ำกัน
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['ห้องแถว', 'อพาร์ตเมนต์', 'บ้านเดี่ยว', 'คอนโด', 'อื่นๆ'], // กำหนดประเภททรัพย์สิน
    },
    
    // อัตราค่าบริการ
    electricRate: {
        type: Number,
        default: 7.0,
        min: 0
    },
    waterRate: {
        type: Number,
        default: 20.0,
        min: 0
    },
    
    // ข้อมูลมิเตอร์ล่าสุด
    lastElectricReading: {
        type: Number,
        default: 0,
        min: 0
    },
    lastWaterReading: {
        type: Number,
        default: 0,
        min: 0
    },
    lastReadingDate: {
        type: Date,
        default: null // สามารถเป็น null ได้ถ้าห้องว่าง
    },
    
    // สถานะห้อง
    status: {
        type: String,
        enum: ['Occupied', 'Vacant', 'Maintenance'],
        default: 'Vacant',
        required: true
    },
    
    // ข้อมูลผู้เช่าปัจจุบัน (อ้างอิงไปยัง Model  Tenant)
    currentTenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant', // หรือ 'Tenant'
        default: null // สามารถเป็น null ได้ถ้าห้องว่าง
    }
}, {
    timestamps: true // เพิ่ม createdAt และ updatedAt
});

// สร้าง Model
const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;