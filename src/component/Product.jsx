import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
   
      <div className="w-full bg-gray-100 p-8 overflow-x-auto">
       
        <h1 className="text-2xl font-bold text-gray-800 mb-6 sticky left-0 bg-gray-100 z-10">
          Similar Products
        </h1>

       
        <div className="grid grid-rows-2 grid-flow-col gap-8 w-max">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-64"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-base font-semibold text-gray-800 truncate w-full mb-2">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm mb-1">
                {product.category || "Best Deal"}
              </p>
              <p className="text-green-600 font-bold mb-3">₹{product.price}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
       
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/about" className="hover:text-blue-400">
              About
            </a>
            <a href="/company-policy" className="hover:text-blue-400">
              Company Policy
            </a>
            <a href="/help-center" className="hover:text-blue-400">
              Help Center
            </a>
            <a
              href="mailto:support@flipkart.com"
              className="hover:text-blue-400"
            >
              support@flipkart.com
            </a>
          </div>
         
          <div className="text-sm text-gray-400 mt-4 md:mt-0 hover:text-blue-400">
            <a href="#">© 2007-2025 Flipkart.com</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Product;
