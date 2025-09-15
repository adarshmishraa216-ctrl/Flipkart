import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiSpeedMiniFill } from "react-icons/ri";
import ReactImageMagnify from "react-image-magnify";
import Description from "./Description";

const Sidebar = () => {
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [thumbsHeight, setThumbsHeight] = useState(null);
  const thumbsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const { images, ...rest } = data;

        const productWithAllData = {
          ...rest,
          images: images.map((img, i) => ({ ...img, key: img.image || i })),
          firstImage: images[0]?.image || "",
        };

        setProductData(productWithAllData);
        setSelectedImage(productWithAllData.firstImage);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (thumbsRef.current) setThumbsHeight(thumbsRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [selectedImage]);

  if (!productData) return <div>Loading...</div>;

  const images = productData.images || [];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 bg-gray-100 min-h-[70vh]">
      {/* Left: Image Gallery */}
      <div className="flex flex-col items-center gap-4 w-full lg:w-auto lg:sticky lg:top-8">
        <div className="border border-[#ddd] rounded-lg bg-white p-4 flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-auto">
          {/* Thumbnails */}
          <div
            ref={thumbsRef}
            className="flex lg:flex-col gap-3 lg:w-28 justify-center items-center"
          >
            {images.map((img) => (
              <div
                key={img.key}
                className={`rounded-md overflow-hidden cursor-pointer border-2 transition ${
                  selectedImage === img.image
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img.image)}
              >
                <img
                  src={img.image}
                  alt="Thumbnail"
                  className="w-20 h-25 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <div
              className="w-full max-w-[500px] flex justify-center items-center relative"
              style={{ height: thumbsHeight || "800px" }}
            >
              {isMobile ? (
                <img
                  src={selectedImage}
                  alt="Product"
                  className="w-full h-auto object-contain"
                />
              ) : (
                thumbsHeight && (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Selected Product",
                        src: selectedImage,
                        width: 700,
                        height: thumbsHeight,
                      },
                      largeImage: {
                        src: selectedImage,
                        width: 1080,
                        height: 720,
                      },
                      enlargedImagePosition: "beside",
                      enlargedImageContainerStyle: {
                        zIndex: 20,
                        width: "450px",
                        height: "100%",
                        border: "1px solid #ccc",
                        backgroundColor: "white",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      },
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center relative z-50">
          <button className="flex items-center justify-center gap-3 bg-[#FF9F00] text-white text-lg font-semibold py-4 px-8 rounded w-full sm:w-1/2 md:w-48">
            <FaShoppingCart className="text-lg" />
            Add to Cart
          </button>
          <button className="flex items-center justify-center gap-2 bg-orange-600 text-white text-lg font-semibold py-4 px-4 rounded w-full sm:w-1/2 md:w-40">
            <RiSpeedMiniFill />
            Buy Now
          </button>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="w-full lg:w-[800px] bg-zinc-100 p-4 sm:p-6 rounded self-start">
        {/* Product Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-2 main-heading">
          {productData.product_data?.name || productData.name}
        </h2>

        {/* Icon */}
        <div className="w-20 mb-4">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
            alt="icon"
          />
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <p className="text-sm text-green-600 mb-1">Special price</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
              ₹{productData.product_data?.special || productData.special}
            </span>
            <span className="text-sm sm:text-base text-gray-500 line-through">
              ₹{productData.product_data?.price || productData.price}
            </span>
            <span className="text-sm sm:text-base text-green-500">
              {productData.product_data?.save_per || productData.save_per}% off
            </span>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            + Delivery charges may apply
          </div>
        </div>
        {/* avilable offer */}

        {/* Available Offers */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Available offers
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-medium">Bank Offer</span>
              <span>
                10% Off on Supermoney UPI. Max discount of ₹50. Minimum order
                value of ₹250.
                <span className="text-blue-600 cursor-pointer"> T&amp;C</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-medium">Bank Offer</span>
              <span>
                5% cashback on Flipkart Axis Bank Credit Card upto ₹400 per
                statement quarter
                <span className="text-blue-600 cursor-pointer"> T&amp;C</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-medium">Bank Offer</span>
              <span>
                5% cashback on Flipkart SBI Credit Card upto ₹400 per calendar
                quarter
                <span className="text-blue-600 cursor-pointer"> T&amp;C</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-medium">Bank Offer</span>
              <span>
                5% cashback on Axis Bank Flipkart Debit Card
                <span className="text-blue-600 cursor-pointer"> T&amp;C</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Buy Options */}
        <div className="border divide-y mb-4">
          {/* Buy without Exchange */}
          <label className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="buyOption"
                defaultChecked
                className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-800 font-medium">
                Buy without Exchange
              </span>
            </div>
            <span className="text-lg font-semibold text-zinc-800">
              ₹{productData.product_data?.special || productData.special}
            </span>
          </label>

          {/* Buy with Exchange */}
          <label className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 border-t">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="buyOption"
                className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-800 font-medium">
                Buy with Exchange
              </span>
            </div>
            <span className="text-green-600 text-sm">
              up to ₹ 200
              {productData.product_data?.exchange || productData.exchange} off
            </span>
          </label>

          {/* Buy with Exchange */}
        </div>

        {/* Warranty */}
        <p className="text-sm text-gray-700 mb-4">
          {productData.product_data?.warranty ||
            "1 Year Manufacturer Warranty for Device & 6 Months Warranty for Inbox Accessories"}
        </p>

        {/* Color Options */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Color</h3>
          <div className="flex gap-2">
            {productData.images?.map((img) => (
              <img
                key={img.key}
                src={img.image}
                alt="Color Option"
                className="w-16 h-20 object-cover border rounded cursor-pointer hover:border-blue-500"
              />
            ))}
          </div>
        </div>
      {/* enter pincode */}
        <div className="  flex items-center">
          <h3 className="text-sm font-semibold text-gray-800 ">Delivery</h3>
          <div className="flex items-center gap-2 m-2 border-none">
            <input
              type="number"
              placeholder="Enter Pincode"
              className="border-b border-blue-700 rounded-md px-3 py-2 text-sm w-40 "
            />
            <button className="text-blue-600 font-medium text-sm">
              check
            </button>
          </div>
        </div>

        {/* Seller Info */}
        <div className="mb-4">
          <h3 className="font-semibold">Seller</h3>
          <p className="text-sm">
            {productData.product_data?.seller || "BUZZINDIA"}{" "}
            <span className="text-blue-600 font-semibold">4.3 ★</span>
          </p>
          <p className="text-xs text-gray-500">
            7 Days Brand Support | GST invoice available
          </p>
        </div>

        {/* Easy Payment Options */}
        <div className="mb-4">
          <h3 className="font-semibold">Easy Payment Options</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>EMI starting from ₹422/month</li>
            <li>Net banking & Credit/Debit/ATM card</li>
          </ul>
        </div>

        {/* Description */}
        <Description />
      </div>
    </div>
  );
};

export default Sidebar;
