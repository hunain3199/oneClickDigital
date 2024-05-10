"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, Cancel, Add } from "@/app/components/Reauseable/Icons";
import InsuranceDetails from "./InsuranceDetails";
import Form from "./Form";
import Call from "../Call";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);

  const toggleBtn = () => {
    isOpen && setIsOpen(false);
    setBtnOpen(!btnOpen);
  };
  const toggleDiv = () => {
    btnOpen && setBtnOpen(false);
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-[80px]">
      <div className="max-w-[900px] mx-auto shadow-lg rounded-2xl mb-[0px]">
        <div className="">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col items-center justify-between p-0 bg-white border-r border-gray-300 lg:p-4">
              <div className="w-[100px] h-[90px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8cxBhvKabO7xi7cUweeN70DSBURQsVk-HnCSBOFeRg&s"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-center text-[14px] font-bold text-lightGray">
                Takaful Total <br /> Loss and Theft <br /> Only
              </p>
            </div>
            <div className="relative flex-1 mt-[40px]">
              <div className="flex flex-col md:flex-row items-center justify-start  lg:mb-[80px] mb-[60px] md:mb-[80px] border-t lg:border-t-0 border-t-gray-300 pt-[10px] md:pt-[30px] lg:pt-[0px]">
                <div className="flex-1 ml-2 ">
                  <ul className="flex flex-col items-start justify-start gap-2 pt-3 lg:items-center lg:justify-center lg:gap-8 lg:flex-row">
                    <li className="flex text-gray-500 md:items-center md:justify-center">
                      <Check />
                      <p className="ml-1 text-[14px] md:text-[16px] lg:text-[18px] ">
                        Total Loss
                      </p>
                    </li>
                    <li className="flex items-center justify-center text-gray-500">
                      <Check />
                      <p className="ml-1 text-[14px] md:text-[16px] ">
                        Theft Cover
                      </p>
                    </li>{" "}
                    <li className="flex items-center justify-center text-gray-500">
                      <Cancel />
                      <p className="ml-1 text-[14px] md:text-[16px] ">
                        Accidental Damage
                      </p>
                    </li>{" "}
                  </ul>
                </div>
                <div className="mr-0 ml-[33px] mt-[16px] md:mt-0 md:ml-[0px] lg:mr-2">
                  <p className="font-semibold text-blue-600 text-[14px]  ">
                    Rs 11,500
                  </p>
                  <p className="font-semibold text-[14px] text-lightGray">
                    for 1 Year
                  </p>
                  <div className="mt-3">
                    <button
                      className="lg:px-4 lg:py-2 px-[8px] py-[5px] mr-3 lg:mr-5 text-blue-600 border border-blue-600 rounded-md"
                      onClick={toggleBtn}
                    >
                      Arrange Call
                    </button>
                    <button className="lg:px-4 lg:py-2 px-[8px] py-[5px] text-white bg-blue-600 rounded-md">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div
                onClick={toggleDiv}
                className="absolute bottom-0 w-full p-1 font-semibold text-center text-blue-600 bg-blue-100 cursor-pointer"
              >
                <div className="flex items-center justify-center p-1">
                  <Add />
                  <button className="text-center ">More Details</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          {btnOpen && (
            <p className="ml-4">
              <Form />
            </p>
          )}
          {isOpen && <InsuranceDetails />}
        </>
      </div>
      <Call />
    </div>
  );
};

export default Accordian;
