import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Product = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://bagpipper.8080-server.net/product?pid=3045740",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "399abd9d4f0bf65d93887281ede6e338",
            },
          }
        );

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const { images, ...rest } = data;

        const productWithAllData = {
          ...rest,
          images: images.map((img, i) => ({ ...img, key: img.image || i })),
          firstImage: images[0]?.image || "",
        };

        setProductData(productWithAllData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!productData) return <div>Loading...</div>;

  return (
    <>

      {/* Similar Products Section */}
      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/company-policy" className="hover:text-blue-400">Company Policy</a>
            <a href="/help-center" className="hover:text-blue-400">Help Center</a>
            <a href="mailto:support@flipkart.com" className="hover:text-blue-400">support@flipkart.com</a>
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