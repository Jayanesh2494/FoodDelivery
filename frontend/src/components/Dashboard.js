import React from "react";
import "../index.css"; // Ensure Tailwind CSS is included

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/orders"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p className="text-gray-600">View recent activities here...</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Upcoming Orders</h2>
            <p className="text-gray-600">See your upcoming orders...</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <p className="text-gray-600">Manage your account settings...</p>
          </div>

          {/* Add more widgets as needed */}
        </div>
      </main>
    </div>
  );
}
