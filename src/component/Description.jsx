import React, { useEffect, useState } from "react";

const Description = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
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
        setProductData(data.product_data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!productData) return <div>Loading description...</div>;

  return (
    <div className="w-full bg-zinc-100 overflow-auto flex flex-col gap-7">
      <div className="w-full font-semibold">
        <h3 className="mb-2">Description</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-4">
          {productData.descr}
        </p>
      </div>

      {/* <div className="w-full font-semibold hover:text-blue-600">
        <h3 className="mb-2">Highlights</h3>
        <div className="text-sm text-gray-700 leading-relaxed mt-4 flex flex-col gap-2">
          {productData.highlights?.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Description;