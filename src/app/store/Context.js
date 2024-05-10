
"use client"

import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status

  const updateUserEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updatedUserName = (name) => {
    setName(name);
  };

  const updatedUserCnic = (cnic) => {
    setCnic(cnic);
  };

  const updateRegistrationStatus = (status) => {
    setIsRegistered(status);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        updateUserEmail,
        name,
        updatedUserName,
        cnic,
        updatedUserCnic,
        isRegistered,
        updateRegistrationStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
