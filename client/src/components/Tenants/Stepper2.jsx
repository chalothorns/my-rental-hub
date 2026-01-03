import React from "react";
import { LuUpload } from "react-icons/lu";

const Stepper2 = () => {
  return (
    <div className="max-w-7xl mt-20 ">
      <div className=" flex justify-end">
        <button className="py-2 px-4 rounded-xl hover:text-gray-600 hover:bg-red-200">
          X
        </button>
      </div>
      <h1 className="text-center text-2xl font-bold">แก้ไขข้อมูลผู้เช่า</h1>

<div className="flex justify-center items-center my-8">
      <ol className="flex items-center w-full max-w-2xl">
        <li className="flex flex-1 items-center text-fg-brand after:content-[''] after:w-full after:h-1 after:border-b after:border-brand-subtle after:border-4 after:inline-block after:ms-4 after:rounded-full">
          <span className="flex items-center justify-center w-10 h-10 bg-brand-softer rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg
              className="w-5 h-5 text-fg-brand"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
          </span>
        </li>
        <li className="flex flex-1 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-4 after:inline-block  after:ms-4 after:rounded-full">
          <span className="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg
              className="w-5 h-5 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg
              className="w-5 h-5 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
              />
            </svg>
          </span>
        </li>
      </ol>
      </div>

      <form className="w-full">
        <h3 className="mb-6 text-lg font-semibold leading-none text-heading">
          ข้อมูลเพิ่มเติม
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b">
          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">อีเมล</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">Facebook</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">Line ID</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">
              สถานที่ทำงาน/เรียน
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">แผนก</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">ตำแหน่ง</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 mb-5 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>
        </div>

        <h3 className="mt-8 mb-6 text-lg font-semibold leading-none text-heading ">
          ผู้ติดต่อฉุกเฉิน
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">ชื่อ</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">ความสัมพันธ์</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>

          <div className="mb-4 mr-4">
            <label className="font-medium text-gray-700">เบอร์โทรศัพท์</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-3 rounded-xl mt-2 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-custom-blue focus:outline-none focus:ring-offset-2"
            />
          </div>
        </div>

        <div className="flex rows justify-between mt-4">
          <button
            type="button"
            className="py-2 px-4 mr-3 rounded-xl hover:bg-[#D1F0E5] transition bg-white border-gray-300"
          >
            ย้อนกลับ
          </button>

          <button
            type="button"
            className="bg-custom-blue hover:bg-[#62bee2f3] text-white mr-4 rounded-xl"
          >
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stepper2;
