import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Assuming you have Tailwind CSS set up in index.css

export default function Home({ id }) {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Simulate a login
    setUser({ name: "John Doe", role: "user" });
  };

  const handleLogout = () => {
    // Simulate a logout
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4" id={id}>
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Food Delivery Logo" className="h-12" />
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Contact
            </Link>
            {user ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={handleLogin}
              >
                Log In
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Food Delivery
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Bringing your favorite meals right to your doorstep. Explore our menu
          and enjoy delicious food!
        </p>
        <Link
          to="/menu"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none"
        >
          View Menu
        </Link>
      </main>

      <footer className="bg-white shadow-inner py-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Food Delivery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
