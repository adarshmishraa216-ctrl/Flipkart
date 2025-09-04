import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Cameras", "Accessories"],
  },
  {
    name: "TVs & Appliances",
    subcategories: ["Televisions", "Washing Machines", "Refrigerators"],
  },
  {
    name: "Men",
    subcategories: ["Clothing", "Footwear", "Watches"],
  },
  {
    name: "Women",
    subcategories: ["Clothing", "Jewellery", "Beauty"],
  },
  { name: "Baby & Kids", subcategories: ["Toys", "Clothing", "Baby Care"] },
  {
    name: "Home & Furniture",
    subcategories: ["Furniture", "Kitchen", "Decor"],
  },
  {
    name: "Sports, Books & More",
    subcategories: ["Sports", "Books", "Stationery"],
  },
  { name: "Flights" },
  { name: "Offer Zone" },
];

const CategoryBar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-white shadow flex overflow-x-auto lg:overflow-visible justify-start lg:justify-center space-x-6 lg:space-x-8 px-4 sm:px-6 py-2 sticky top-0 z-50">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative group flex-shrink-0"
          onMouseEnter={() => setOpenIndex(index)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <button className="flex items-center text-sm font-medium text-gray-800 whitespace-nowrap hover:text-blue-600">
            {cat.name}
            {cat.subcategories && <ChevronDown size={14} className="ml-1" />}
          </button>
          {openIndex === index && cat.subcategories && (
            <div className="absolute left-0 top-8 bg-white shadow-lg rounded w-48 z-50">
              <ul className="text-sm text-gray-700">
                {cat.subcategories.map((sub, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
