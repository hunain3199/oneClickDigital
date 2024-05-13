"use client";
import { updatePassword } from "@/app/components/action/updatePassword";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const ResetPasswordPage = ({ params }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleChangePassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // checking password is matched ?
      if (newPassword != confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      // update new password
      await updatePassword({ newPassword, token: params.token });
      toast.success("success");

      // input-fields blanks after success
      setNewPassword("");
      setConfirmPassword("");
      setError("");
      // Redirect to Login Page
      router.replace("/login");
    } catch (error) {
      toast.error("Update Password Error");
      console.log("Unsuccessfully Updated new  Password ");
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-24">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create New Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={newPassword}
              onChange={handleChangePassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;
