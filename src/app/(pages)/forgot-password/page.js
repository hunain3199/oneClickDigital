"use client";
import { mailAction } from "@/app/components/action/mailAction";
import React, { useState } from "react";

function ForgotPass() {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await mailAction({ email });
      setEmail("");
      setMessage("success");
    } catch (error) {
      setMessage("unsuccess");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-14 mb-32  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forgot Your Password?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please enter your email address. We&apos;ll send you a password reset
              link.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {message === "success" && (
                <>
                  <p className="text-xs text-green-500 font-sans">
                    Successfully sent check your email
                  </p>
                </>
              )}
              {message === "unsuccess" && (
                <>
                  <p className="text-xs text-red-500 font-sans">
                    User not Exists
                  </p>
                </>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.478 0 0 4.478 0 10c0 5.522 4.478 10 10 10 5.522 0 10-4.478 10-10 0-5.522-4.478-10-10-10zm5.354 7.146a.5.5 0 00-.707 0l-6 6a.5.5 0 10.707.707l6-6a.5.5 0 000-.707l-6-6a.5.5 0 10-.707.707l6 6z"
                    />
                  </svg>
                </span>
                Send Reset Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
