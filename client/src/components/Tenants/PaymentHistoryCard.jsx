import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { LuStickyNote } from "react-icons/lu";

const PaymentHistoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-2xl p-10 border-2  border-red-300 bg-[#f8e7ed] w-full max-w-[300px]">
            
            {/* 1. ส่วนเนื้อหาด้านบน (Title, Count, Icon) อยู้ชิดซ้าย */}
            <div className="w-full text-center">
                
                {/* 1.1 Text Content (Title, Count, Description) */}
                <div>
                    <div className="text-xl font-semibold mb-3 mr-3 ">
                       
                         มกราคม {/* แสดงไอคอนและชื่อหัวข้อ */}
                    </div>
                    <div className="text-lg font-bold mb-3">
                        ฿8,500 {/* แสดงตัวเลขสถิติ */}
                    </div>

                    <div className="mb-3">
                    <button className="border border-gray-300 bg-gray-100 hover:bg-[#ecfdf7] transition rounded-xl p-3 mr-2 ">
                      <FaRegCircleCheck className="w-5 h-5  text-gray-700 " />
                    </button>
                    <button className="border border-gray-300 bg-gray-100 hover:bg-[#ecfdf7] transition rounded-xl p-3">
                      <FaRegCircleXmark className="w-5 h-5 text-gray-700 " />
                    </button>
                    </div>
                 
                    
                    <div className="flex justify-center items-center cursor-pointer p-5 rounded-xl hover:bg-[#D1F0E5] transition">
                                    <LuStickyNote className="w-6 h-6 mr-2 text-gray-700 " />
                                    <p className="">เพิ่มโน้ต</p>
                                    
                                    </div>
                                    
                </div> 
                
               

            </div> 
            
        </div>
  )
}

export default PaymentHistoryCard