const mongoose = require('mongoose');

// กำหนด Schema สำหรับ Maintenance
const MaintenanceSchema = new mongoose.Schema({
    // property ที่แจ้งซ่อม (อ้างอิงไปยัง Model Property)
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property', 
        required: true
    },
    // ผู้แจ้งซ่อม (อ้างอิงไปยัง Model User หรือ Tenant)
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // หรือ 'Tenant'
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In progress', 'Completed', 'Cancelled'], // สถานะที่อนุญาต
        default: 'Pending',
        required: true
    },
    submittedDate: {
        type: Date,
        default: Date.now // หากไม่ได้ระบุ จะใช้เวลาปัจจุบัน
    },
    // อาจเพิ่ม field อื่นๆ เช่น:
    // resolutionDate: { type: Date }, // วันที่ซ่อมเสร็จ
    // cost: { type: Number, default: 0 } // ค่าใช้จ่ายในการซ่อม
}, {
    timestamps: true // เพิ่ม createdAt (วันที่สร้าง) และ updatedAt (วันที่อัปเดต)
});

// สร้าง Model
const Maintenance = mongoose.model('Maintenance', MaintenanceSchema);

module.exports = Maintenance;