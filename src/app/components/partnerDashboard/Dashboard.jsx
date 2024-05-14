'use client';
import React, { useState } from "react";
import Modal from "../Reauseable/Modal";

const Dashboard = () => {
 const [open,isOpen]= useState(false)
  return (
    <div className="flex h-screen">
      <aside className="flex-shrink-0 w-64 bg-blue text-gray">
        <div className="flex flex-col justify-between h-full">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <ul className="mt-4">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Admins
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Partners Portal
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Customer Data
                </a>
              </li>
            </ul>
          </div>
          {/* Sidebar Footer */}
          {/* <footer className="p-4 text-sm text-center text-gray-400 bg-gray-700">
            Dashboard Footer
          </footer> */}
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="px-6 py-4 border-b border-astrosnavy ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Welcome, User!</h1>
          </div>
        </header>
        <div className="p-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          earum voluptatibus corporis magni quibusdam iusto eos dignissimos
          dolores atque maxime.
          <Modal>
            Hi
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;