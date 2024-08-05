import React from "react";
import "../index.css"; // Ensure Tailwind CSS is included

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality food delivery services that
            are fast, reliable, and affordable. We strive to offer an
            exceptional experience to our customers while supporting local
            businesses and communities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600">
            We connect you with your favorite restaurants and deliver delicious
            meals right to your doorstep. Our platform makes ordering food easy
            and convenient, allowing you to track your delivery in real-time and
            enjoy a wide range of dining options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Jane Doe
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                John Smith
              </h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Alice Johnson
              </h3>
              <p className="text-gray-600">Head of Customer Service</p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}
