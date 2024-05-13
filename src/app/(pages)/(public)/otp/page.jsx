"use client"

import axios from "axios";
import Image from "next/image";
import { NextResponse } from "next/server";
import React, { useContext, useEffect, useState } from "react";
import Google from "@public/assets/google-icon.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Error from "@public/assets/error.svg";
import toast, { Toaster } from "react-hot-toast";
import SideBg from "@public/assets/signUp-bg.svg";
import Link from "next/link";
import { AuthContext } from "@/app/store/Context";

const page = () => {
  const router = useRouter()
const [input, setInput] = useState({  number: "",  });

  const {email,isRegistered,updateRegistrationStatus} = useContext(AuthContext)
  useEffect(()=>{
    if(!isRegistered){
     router.replace('/register')
    }
  },[isRegistered,router])
const handleChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });// Update input with the new value
  };
  // const { data } = router.query;
  // const parsedData = data ? JSON.parse(data) : null;
  const [userError, setUserError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const dataToSend = {
        email: email,
        pinCode: input.number,
        
      };
  
      console.log("Data to send:", dataToSend); // Log the data being sent
  
      const response = await axios.post('https://oneclick-server.onrender.com/api/v1/auth/otpCode-complete', 
        
        dataToSend,
      );

  
      console.log("Response:", response); // Log the response data
  
      if (response.data.success === false) {
        setUserError("error");
        console.log("User already exists");
        return;
      } else {
        toast.success("success");
        setInput({ email: "", password: "" });
      }
  
      if (response.data.success === true) {
        router.replace("/register/partner-detail");
        updateRegistrationStatus(true)
      }
    } catch (error) {
      console.log("Error:", error); // Log the error for debugging
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
      toast.error("Registration Error");
    }
  };
  
  
  
  return (
    <>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center mx-auto lg:mx-28 my-10 ">
     
        <Toaster />
        {/* Image-Section */}
        <div className="hidden lg:block xl:block">
          <div>
            <Image src={SideBg} alt="side_bg" />
          </div>
        </div>
        {/* Form-Section */}
        <div className="mx-auto">
          <form
            className="bg-white p-8 rounded-lg shadow-lg py-7 w-full md:w-96 lg:w-96 border border-blue-400"
            onSubmit={handleSubmit}
          >
            <h1 className="flex items-center justify-center text-2xl font-sans font-bold text-blue-500">
              Email Verification
            </h1>
           
            <div className="mb-4 mt-4">

              <label
                className="text-gray-500 mx-2 text-sm pb-1 block"
                htmlFor="login"
              >
                E-mail Verification
              </label>
            
              <input
                value={input.number}
                className="w-full rounded-lg border border-black-200 p-3 text-sm"
                placeholder="Enter Verification Code"
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
              />
              
            </div>
           
            
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md transition-all mt-3"
            >
              Submit
            </button>
           
           
          </form>
        </div>
      </div>
      </>
  )
}

export default page
