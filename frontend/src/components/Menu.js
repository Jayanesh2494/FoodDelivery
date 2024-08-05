import React from "react";
import "../index.css"; // Ensure Tailwind CSS is included

export default function Menu() {
  const menuItems = [
    {
      name: "Cheeseburger",
      description: "Juicy beef patty with melted cheese, lettuce, and tomato.",
      price: "$9.99",
    },
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
      price: "$12.99",
    },
    {
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
      price: "$8.99",
    },
    {
      name: "Spaghetti Carbonara",
      description:
        "Traditional Italian pasta with eggs, cheese, pancetta, and black pepper.",
      price: "$14.99",
    },
    // Add more menu items as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Menu</h1>

        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-xl font-bold text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
