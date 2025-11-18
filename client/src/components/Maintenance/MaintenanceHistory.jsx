// src/components/Message/MaintenanceHistory.jsx

import React from 'react';
import { FaClock, FaChevronDown } from 'react-icons/fa'; // ไอคอนนาฬิกาสำหรับประวัติ


// 💡 สร้าง Component ย่อยสำหรับการ์ดแต่ละใบ
const IssueCard = ({ issue, onStatusChange }) => {
    // ฟังก์ชันสำหรับกำหนดสีตามสถานะ
    const getStatusClasses = (status) => {
        switch (status) {
            case 'Pending': return 'bg-red-100 text-red-700';
            case 'In progress': return 'bg-yellow-100 text-yellow-700';
            case 'Completed': return 'bg-green-100 text-green-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };
        // 💡 กำหนด URL รูปภาพ: ใช้ issue.imageUrl หรือ placeholder
    const imageUrl = issue.imageUrl || 'https://via.placeholder.com/300x150?text=No+Image';


     

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
            {/* 💡 ส่วนรูปภาพ  */}
            <div className="h-32 bg-gray-200 rounded-lg mb-3">
                <img 
                    src={imageUrl} 
                    alt={issue.title} 
                    className="w-full h-full object-cover" 
                />
            </div>
            
            <div className="p-4">

                {/* 2. หัวข้อและการจัดการสถานะ */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold mb-1">{issue.title}</h3>
            
                  {/* สถานะและ Dropdown  */}
                    <select
                        name="status"
                        value={issue.status}
                        // เรียกฟังก์ชันที่ส่งมาจากแม่เมื่อมีการเปลี่ยนแปลง
                        onChange={(e) => {
                              const newStatus = e.target.value;
                              // 🟢 เรียก Prop function, ส่ง ID และสถานะใหม่กลับไป
                              onStatusChange(issue.id, newStatus);
                }}
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full appearance-none pr-6 cursor-pointer border border-gray-300 ${getStatusClasses(issue.status)}`}
                    >
                        <option value="">สถานะ</option>
                        <option value="pending">รอดำเนินการ</option>
                        <option value="in progress">กำลังดำเนินการ</option>
                        <option value="completed">เสร็จสิ้น</option>
                        <option value="cancelled">ยกเลิก</option>

                        {/* ตัวเลือกห้อง เช่น <option value="Room 101">Room 101</option> */}
                    </select>
                </div>

            {/* รายละเอียด */}
            <p className="text-sm text-gray-600">{issue.room}</p>
            <p className="text-xs text-gray-500 mt-1 mb-2">{issue.description}</p>
            

            
            {/* วันที่แจ้ง */}
            <p className="text-xs text-gray-400 mt-2">แจ้งเมื่อ: {issue.date}</p>
          </div>
        </div>
    );
};


const MaintenanceHistory = ({ issues }) => {
    return (
        <div className="mt-8">

            {/* หัวข้อ ประวัติการแจ้งซ่อม */}
            <div className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                <FaClock className="w-5 h-5 mr-2" />
                ประวัติการแจ้งซ่อม
            </div>
            
            {/* 💡 Grid Layout สำหรับการ์ด: 3 คอลัมน์ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {issues.length > 0 ? (
                    issues.map((issue) => (
                        <IssueCard key={issue.id} issue={issue} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full">ยังไม่มีประวัติการแจ้งซ่อม
                    <FaClock className="w-6 h-6 inline mr-2" />
                    </p>
                )}
            </div>
        </div>
    );
};

export default MaintenanceHistory;