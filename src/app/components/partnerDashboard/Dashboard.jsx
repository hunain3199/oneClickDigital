import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-64 bg-red-600">
        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Content */}

          <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Add your sidebar links here */}
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
              {/* Add more links as needed */}
            </ul>
          </div>
          {/* Sidebar Footer */}
          <footer className="p-4 text-sm text-center text-gray-400 bg-gray-700">
            Dashboard Footer
          </footer>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="px-6 py-4 border-b border-astrosnavy ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Welcome, User!</h1>
            {/* Add your header content here */}
          </div>
        </header>
        {/* Page Content */}
        <div className="p-6">
          {/* Content passed as children */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          earum voluptatibus corporis magni quibusdam iusto eos dignissimos
          dolores atque maxime.
        </div>
      </main>
    </div>
  );
};

export default Dashboard;