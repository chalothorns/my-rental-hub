import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Calendar } from "lucide-react";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { Link } from "react-router-dom";
import { TenantInfo } from "./TenantInfo";

const TenantDetail = () => {
  return (
    <div className="md:ml-10 mt-10 mb-20 mx-auto w-[380px] md:w-full">
        
      <button className="flex mb-8 mt-2 px-4 py-2 w-[220px] cursor-pointer rounded-xl border border-gray-300 bg-gray-50 text-black hover:bg-[#D1F0E5] transition">
        <FaArrowLeft className="w-5 h-5 text-[#53b8e0] mr-2" />
        <p className="text-base  text-gray-700">กลับไปหน้ารายชื่อผู้เช่า</p>
      </button>
      

      <div className="mb-4">
        <TenantInfo />
      </div>

      {/* -------------------------payment history---------------------- */}
      <div className=" md:w-[80%]  shadow-lg rounded-2xl p-10 border-2 ">
        <div className="md:flex md:justify-between">
          <div className="flex items-center mb-6 ">
            <Calendar className="w-6 h-6 text-[#53b8e0] mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">
              ประวัติการชำระเงิน
            </h2>
          </div>
          {/* Input สำหรับปี */}
          <div className="font-semibold mb-6">
            ปี (ค.ศ.):
            <input
              type="text"
              name="title"
              placeholder="เช่น ปี 2025"
              className="px-3 py-2 w-32 rounded-xl ml-5 font-medium bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <PaymentHistoryCard />
          <PaymentHistoryCard />
          <PaymentHistoryCard />
          <PaymentHistoryCard />
          <PaymentHistoryCard />
          <PaymentHistoryCard />
        </div>
      </div>
    </div>
  );
};

export default TenantDetail;
