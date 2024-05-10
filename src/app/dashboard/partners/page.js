"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { styled } from "@mui/system";

function DisplayPage() {
  const [users, setUsers] = useState([]);
  // test
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const userDetail = (user) => {
    openModal(user);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  // test

  useEffect(() => {
    try {
      axios.get("/api/users").then((res) => {
        setUsers(res.data);
      });
    } catch (error) {
      console.log("Error for fetching users data from MongoDB:", error);
    }
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/users");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setUsers(data);
  //       console.log("Data received from API route:", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <h1 className="text-4xl  mb-4 text-center text-blue-500 font-extrabold font-sans">
        PARTNERS DATA
      </h1>

      {users.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 divide-y  divide-blue-200">
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-sans">
                  {index + 1}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-sans">
                  {user.name}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-sans">
                  {user.email}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-sans">
                  {user.city}
                </td>
                <td
                  className="px-6 py-2 whitespace-nowrap text-sm font-sans text-blue-500 text-center cursor-pointer"
                  onClick={() => userDetail(user)}
                >
                  <VisibilityIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="flex justify-center items-center mt-80">
            <PacmanLoader
              color="rgb(147, 197, 253)"
              size={15}
              speedMultiplier={1.5}
            />
          </div>
        </>
      )}

      {/* Modal-start  */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="bg-blue-50 p-4 rounded-lg shadow-lg text-center space-y-3">
            <h1 className="text-2xl text-blue-500 font-sans font-bold mb-5">
              User Details
            </h1>
            {/* Name and Email  */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 text-start">
              <p className="text-sm font-sans text-blue-500">
                Name:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.name}{" "}
                </span>
              </p>

              <p className="text-sm font-sans text-blue-500">
                Email:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.email}{" "}
                </span>
              </p>
            </div>
            {/* Phone and Postal  */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 text-start">
              <p className="text-sm font-sans text-blue-500">
                Phone:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.tel}{" "}
                </span>
              </p>

              <p className="text-sm font-sans text-blue-500">
                Postal:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.postal}{" "}
                </span>
              </p>
            </div>

            {/* City and Country  */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 text-start">
              <p className="text-sm font-sans text-blue-500">
                City:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.city}{" "}
                </span>
              </p>

              <p className="text-sm font-sans text-blue-500">
                Country:{" "}
                <span className="text-md  font-bold font-sans text-black">
                  {selectedUser?.country}{" "}
                </span>
              </p>
            </div>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </div>

        {/* <Box sx={{ ...modalStyle, width: 400 }}> */}

        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            User Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name: {selectedUser?.name}
            <br />
            Email: {selectedUser?.email}
            <br />
            City: {selectedUser?.city}
            <br />
            Phone: {selectedUser?.tel}
            <br />
            Country: {selectedUser?.country}
            <br />
            Postal: {selectedUser?.postal}
          </Typography> */}
        {/* <Button onClick={closeModal}>Close</Button> */}
        {/* </Box> */}
      </Modal>
      {/* Modal-start  */}
    </>
  );
}

export default DisplayPage;
