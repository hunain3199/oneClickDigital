"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

function Profile() {
  const session = useSession();
  const { status } = session;

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    tel: "",
    address: "",
    postal: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (status === "authenticated") {
      setInputs((prevInputs) => ({
        ...prevInputs,
        name: session.data.user.name,
        email: session.data.user.email,
      }));

      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setInputs((prevInputs) => ({
            ...prevInputs,
            postal: data.postal,
            tel: data.tel,
            city: data.city,
            country: data.country,
            address: data.address,
          }));
        });
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center">
          <ClipLoader color="rgb(59 130 246)" speedMultiplier={1.5} />
        </div>
      </>
    );
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    toast.promise(
      axios.put("/api/profile", inputs).then((res) => {
        console.log("success");
      }),

      {
        loading: "Saving...",
        success: <p>Profile saved!</p>,
        error: <p>Could not save.</p>,
      }
    );
  };

  const checkImage = session?.data?.user?.image;
  
  return (
    <>
 
      <section className="mt-10 max-w-md mx-auto ">
        <h2 className="text-2xl  mb-6 flex justify-center text-orange-500 font-bold ">
          Profile
        </h2>
        <Toaster />

        <div className=" flex gap-6 ">
          {checkImage ? (
            <div className=" p-2 rounded text-center align-top items-start">
              <Image
                src={checkImage}
                width={150}
                height={220}
                alt="avatar"
                className="rounded-lg mx-auto border"
              />
            </div>
          ) : null}

          <form className="grow" onSubmit={handleUpdate}>
            {/* Full-Name  */}
            <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md shadow-lg "
              placeholder="Enter Name"
            />
            {/* Email  */}
            <label className="block text-xs font-medium text-gray-600 mt-2 mx-1 ">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md shadow-lg bg-gray-100"
              disabled
            />
            {/* Phone-Number  */}
            <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={inputs.tel}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md shadow-lg "
            />
            {/* Address  */}
            <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md shadow-lg "
            />
            {/* Postal & Country  */}
            <div className="flex gap-2">
              <div>
                <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  value={inputs.postal}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md shadow-lg "
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={inputs.city}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md shadow-lg "
                />
              </div>
            </div>
            <label className="block text-xs font-medium text-gray-600 mt-2 mx-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={inputs.country}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md shadow-lg "
            />
            <button
              type="submit"
              className="w-full bg-orange-500 mt-3 rounded-lg p-2 text-white font-bold mb-3 "
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
