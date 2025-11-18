import React, {useState} from 'react';

import ReportIssues from '../components/Maintenance/ReportIssues';
import MaintenanceHistory from '../components/Maintenance/MaintenanceHistory';


const MaintenancePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [maintenanceIssues, setmaintenanceIssues] = useState([]);

    //function เอาไว้เปิด/ปิด modal
    const handleToggleForm = () => {
        setIsModalOpen(!isModalOpen); //ใช้ !isModalOpen เพื่อสลับค่าจาก true เป็น false หรือ false เป็น true
    };
    // ฟังก์ชันนี้เก็บไว้เผื่อปุ่ม 'ยกเลิก' ใน Form
    const handleCloseForm = () => setIsModalOpen(false);


    //function เพิ่มปัญหา
    const handleAddNewIssue = (formData) => {
        //1.รวมข้อมูลที่ได้จาก form(dataForm) เข้ากับข้อมูลที่จำเป็นอื่นๆ
        const newIssue ={
            ...formData, // ข้อมูลที่มาจาก ReportIssues.jsx
            id:Date.now(),
            status:'Pending',
            date: new Date().toLocaleDateString('th-TH', {day:'2-digit', month:'short', year:'numeric'})

        };

         
    setmaintenanceIssues([newIssue, ...maintenanceIssues]);
    handleCloseForm();
    };


    return (
        /*max-w-7xl เพื่อจำกัดความกว้างของจอ และง่ายต่อการจัดวางองค์ประกอบข้างใน*/ 
        <div className="flex flex-col  p-4 md:p-8 min-h-screen lg:max-w-5xl 2xl:max-w-7xl"> 

            {/* Header Area */}
            <div className="flex justify-between items-center w-full">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 ">แจ้งซ่อม</h1>
                    <p className= "text-gray-500 mt-3 ">แจ้งและติดตามปัญหาการซ่อมแซม</p>
                </div>

            {/* 1. ปุ่มแจ้งปัญหา: ใช้ฟังก์ชันเปิด Modal */}
            <button
                onClick={handleToggleForm} //เรียกเปิด Modal
                className="flex items-center bg-custom-blue hover:bg-[#62bee2f3] text-white md:text-lg font-meduim md:py-4 md:px-14 rounded-xl shadow-md transition duration-150"
            >
                {/* ... icon และ text ... */}
                + แจ้งปัญหา
            </button>
        </div>

            {/* 2. Modal/Form (ซ่อนไว้ หรือแสดงอยู่บนสุด) */}
            <ReportIssues
                isOpen={isModalOpen}
                onClose={handleToggleForm}
                onSave={handleAddNewIssue}
                

            />
                
            
            {/* 3.ประวัติการแจ้งซ่อม */}
                <MaintenanceHistory issues={maintenanceIssues} />
            
                
        </div>
       
    );
};

export default MaintenancePage;
