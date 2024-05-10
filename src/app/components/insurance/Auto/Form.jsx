"use client";
import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { NextIcon, PreviousIcon } from "../../Reauseable/Icons";

function Form() {
  // useState
  const [formState, setFormState] = useState(true);

  const BikeMake = [
    { value: "Unique", label: "Unique" },
    { value: "Honda", label: "Honda" },
    { value: "Suzuki", label: "Suzuki" },
    { value: "Super Power", label: "Super Power" },
    { value: "Super Star", label: "Super Star" },
    { value: "United", label: "United" },
    { value: "Yamaha", label: "Yamaha" },
    { value: "Habib", label: "Habib" },
    { value: "Express", label: "Express" },
    { value: "Crown", label: "Crown" },
    { value: "Road Prince", label: "Road Prince" },
    { value: "Racer Bike", label: "Racer Bike" },
    { value: "Hi-speed", label: "Hi-speed" },
    { value: "Metro", label: "Metro" },
    { value: "Union Star", label: "Union Star" },
    { value: "Benelli", label: "Benelli" },
    { value: "Cougar", label: "Cougar" },
    { value: "Eager Fire Bolt", label: "Eager Fire Bolt" },
    { value: "Star", label: "Star " },
    { value: "Galaxy", label: "Galaxy" },
    { value: "Super Burraq", label: "Super Burraq" },
    { value: "Hondyas", label: "Hondays" },
  ];

  const engineCc = [
    { value: "110cc", label: "110cc" },
    { value: "150cc", label: "150cc" },
  ];

  const manufacuringYear = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  const [formData, setFormData] = useState({
    bikeMake: "",
    engineCc: "",
    manufacuringYear: "",
    bikeValue: "",
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.bikeMake ||
      !formData.engineCc ||
      !formData.manufacuringYear ||
      !formData.bikeValue
    ) {
      setError(
        "Please select both Bike Make and Engine CC and manufacuringYear"
      );

      return;
    }
    console.log(formData);
    setFormData({
      bikeMake: "",
      engineCc: "",
      manufacuringYear: "",
      bikeValue: "",
      name: "",
      email: "",
      phone: "",
    });
    setError("");
  };

  return (
    <div className="bg-white p-[20px] rounded-md shadow-lg ">
      <form onSubmit={handleSubmit}>
        {formState ? (
          <div>
            <TextField
              id="outlined-select-bikeMake"
              select
              label="Bike Make"
              name="bikeMake"
              value={formData.bikeMake}
              onChange={handleChange}
              error={!!error}
              sx={{ width: "100%" }}
              className="rounded-md text-[10px] mb-[20px]"
            >
              {BikeMake.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-engineCc"
              select
              label="Engine CC"
              name="engineCc"
              value={formData.engineCc}
              onChange={handleChange}
              error={!!error}
              sx={{ width: "100%" }}
              className="rounded-md text-[10px] mb-[20px]"
            >
              {engineCc.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-engineCc"
              select
              label="Manufacturing Year"
              name="manufacuringYear"
              value={formData.manufacuringYear}
              onChange={handleChange}
              error={!!error}
              sx={{ width: "100%" }}
              className="rounded-md text-[10px] mb-[20px]"
            >
              {manufacuringYear.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              id="outlined-required"
              label="Value of Bike(PKR)"
              defaultValue="Hello World"
              value={formData.bikeValue}
              onChange={handleChange}
              name="bikeValue"
              type="number"
              sx={{ width: "100%" }}
              className="rounded-md text-[10px] mb-[20px]"
            />

            <FormHelperText error>{error}</FormHelperText>
          </div>
        ) : (
          <>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Name"
                //   defaultValue="Hello World"
                sx={{ width: "100%" }}
                className="rounded-md text-[10px] mb-[20px]"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                //   defaultValue="Hello World"
                sx={{ width: "100%" }}
                className="rounded-md text-[10px] mb-[20px]"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              />

              {/* <input
                className="w-full text-left border border-gray-300 mb-[20px] px-[14px] py-[16.5px] text-[16px] rounded-[3px] "
                placeholder="Phone Number *"
              /> */}

              <TextField
                required
                id="outlined-required"
                label="Phone"
                //   defaultValue="Hello World"
                sx={{ width: "100%" }}
                className="rounded-md text-[10px] mb-[20px]"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number"
              />
            </div>
          </>
        )}

        {formState ? (
          <button
            //   type="submit"
            className="rounded-md bg-blue-600 text-[14px]  px-[15px] py-2.5 text-sm font-medium text-white shadow w-full flex items-center justify-center gap-2"
            onClick={() => setFormState(false)}
          >
            Next
            <NextIcon />
          </button>
        ) : (
          <div className="flex items-center justify-center gap-4 ">
            <button
              onClick={() => setFormState(true)}
              className="rounded-md bg-blue-600 text-[14px]  px-[15px] py-2.5 text-sm font-medium text-white shadow  flex items-center justify-center gap-2"
            >
              <PreviousIcon />
              Previous
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 text-[14px]  px-[15px] py-2.5 text-sm font-medium text-white shadow  flex items-center justify-center gap-2"
            >
              See Plans
              <NextIcon />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
