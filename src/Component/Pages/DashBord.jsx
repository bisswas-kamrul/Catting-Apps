import React from "react";

const DashBord = () => {
  return (
    <>
      {/* Dashboard main container */}
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        {/* Top Navbar */}
        <header className="w-full bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 border-r border-gray-700 p-5 hidden md:block">
            <nav className="space-y-3">
              <a
                href="#"
                className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition">
                Home
              </a>
              <a
                href="#"
                className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition">
                Profile
              </a>
              <a
                href="#"
                className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition">
                Settings
              </a>
            </nav>
          </aside>

          {/* Dashboard Content Area */}
          <section className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Total Users</h2>
              <p className="text-3xl font-bold text-indigo-400">1,240</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Revenue</h2>
              <p className="text-3xl font-bold text-green-400">$12,560</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">Orders</h2>
              <p className="text-3xl font-bold text-amber-400">320</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DashBord;
