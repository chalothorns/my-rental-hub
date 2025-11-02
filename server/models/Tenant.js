const mongoose = require('mongoose');

// กำหนด Sub-schema สำหรับ Emergency Contact
const EmergencyContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
}, { _id: false }); // ไม่ต้องมี _id สำหรับ Sub-document นี้

// กำหนด Schema หลักสำหรับ Tenant
const TenantSchema = new mongoose.Schema({
    // ข้อมูลหลัก
    prefix: {
        type: String,
        enum: ['นาย', 'นาง', 'นางสาว'],
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    nationalId: {
        type: String,
        required: true,
        unique: true, // เลขบัตรประชาชนต้องไม่ซ้ำกัน
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // อีเมลต้องไม่ซ้ำกัน
        trim: true,
        lowercase: true,
        // อาจเพิ่ม validation สำหรับ format email ที่นี่
    },
    
    // สถานะ
    currentStatus: {
        type: String,
        enum: ['Living', 'Moved Out', 'Pending'], // สถานะผู้เช่า
        default: 'Living',
        required: true
    },
    
    // Foreign Keys (การเชื่อมโยง) - ใช้ `ref` เพื่อบอกว่าเชื่อมกับ Model ไหน
    currentProperty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        default: null // สามารถเป็น null ได้ถ้า Moved Out
    },
    leaseAgreement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lease',
        default: null // สามารถเป็น null ได้ถ้า Moved Out (หรือเช่าหลายครั้ง)
    },
    
    // ข้อมูลเสริม
    avatar: {
        type: String,
        trim: true
    }, 
    idProofUrl: {
        type: String,
        trim: true
    },
    emergencyContact: EmergencyContactSchema // ใช้ Sub-schema ที่กำหนดไว้
}, {
    timestamps: true // เพิ่ม createdAt และ updatedAt
});

// สร้าง Model
const Tenant = mongoose.model('Tenant', TenantSchema);

module.exports = Tenant;