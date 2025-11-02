// ไฟล์: server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // 👈 เรียกใช้ไฟล์เชื่อมต่อ DB

// นำเข้า Routes ทั้งหมด
const expenseRoutes = require('./routes/expenseRoutes');
const billingRoutes = require('./routes/billingRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const leaseRoutes = require('./routes/leaseRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');


// 1. ตั้งค่าพื้นฐาน
dotenv.config();
connectDB(); // 👈 เรียกใช้ฟังก์ชันเชื่อมต่อ DB ทันที

const app = express();

// 2. Middlewares
app.use(express.json());

//  ใช้ cors Middleware แทนการเขียน Headers ด้วยมือ
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// บรรทัดนี้: บอกว่าทุก request ที่มาที่ /api/tenants ให้ไปใช้ tenantRoutes
app.use('/api/expenses', expenseRoutes);
app.use('/api/expenses', propertyRoutes);
app.use('/api/billings', billingRoutes);
app.use('/api/leases', leaseRoutes);
app.use('/api/maintenances', maintenanceRoutes);
app.use('/api/tenants', tenantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));