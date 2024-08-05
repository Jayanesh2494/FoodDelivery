import React from "react";
import "../index.css"; // Ensure Tailwind CSS is included

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We would love to hear from you. Please fill out the form below or
            reach out to us through the contact information provided.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Address:</strong> 1234 Food Street, Culinary City, FC 56789
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> contact@fooddelivery.com
        </p>
      </div>
    </div>
  );
}
