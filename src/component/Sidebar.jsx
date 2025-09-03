import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiSpeedMiniFill } from "react-icons/ri";
import ReactImageMagnify from "react-image-magnify";

const images = [
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/n/4/i/-original-imagwk3hcsbffnfr.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/l/m/y/-original-imagwk3hppm4twkr.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/5/t/w/-original-imagwk3hwezp8pur.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/d/8/2/-original-imagwk3hp5ayrvmt.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/v/e/b/-original-imagwk3hgdzfbg7g.jpeg?q=70&crop=false",
];

const SideNavbar = () => {
  const [selectedImage, setSelectedImage] = useState(images[1]);

  return (
    <div className="flex gap-6 p-6 bg-gray-100">
      {/* Left Thumbnails */}
      <div className="w-24 p-2 flex flex-col gap-3 border-r bg-gray-100">
        {images.map((img, index) => (
          <div
            key={index}
            className={`rounded overflow-hidden cursor-pointer border ${
              selectedImage === img ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center"></div>

      {/* Middle image section */}

      <div className="">
        <div className="w-[450px] h-[450px]">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Selected Product",
                isFluidWidth: false,
                src: selectedImage,
                width: 450,
                height: 450,
              },
              largeImage: {
                src: selectedImage,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex align-center justify-between">
          <button className="flex w-50 items-center gap-2 bg-yellow-500 text-white font-medium py-2 px-4 rounded">
            <FaShoppingCart className="text-lg" />
            Add to Cart
          </button>

          <button className="flex items-center gap-2 w-50 bg-orange-600 text-white py-2 px-4 font-medium rounded">
            <RiSpeedMiniFill />
            Buy Now
          </button>
        </div>
      </div>

      {/* Right sections */}
      <div className="w-[800px] bg-zinc-100 p-6 rounded mr-6 ">
        <h2 className="text-2xl font-light text-gray-800 mb-2">
          Titan Mirage with 1.96" AMOLED Display with AOD(410x502)&Functional
          Crown, BT Calling Smartwatch (Brown Strap, Free Size)
        </h2>

        <div className="w-20">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
            alt="icon"
          />
        </div>

        <div>
          <p className="text-sm text-green-600 mb-1">Special price</p>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-zinc-800">₹2,499</span>
            <span className="text-sm text-gray-500 line-through">₹5,999</span>
            <span className="text-sm text-green-500">58% off</span>
          </div>
          <div className="text-sm text-gray-500">
            + ₹19 Protect Promise Fee{" "}
          </div>
          <div className="text-sm text-gray-500 leading-relaxed">
            Secure delivery by 5 Sep, Friday
          </div>
        </div>

        {/* Offers */}
        <div className="mb-6 leading-relaxed">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Available offers
          </h3>

          <p className="text-sm text-gray-700 mb-2">
            • <span className="text-sm font-semibold">Bank Offer 5%</span>{" "}
            cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement
            quarter
            <span className="text-blue-600 ml-2">T&C</span>
          </p>

          <p className="text-sm text-gray-700 mb-2">
            • <span className="text-sm font-semibold">Bank Offer 5%</span>{" "}
            cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar
            quarter
            <span className="text-blue-600 ml-2">T&C</span>
          </p>

          <p className="text-sm text-gray-700 mb-2">
            • <span className="text-sm font-semibold">Bank Offer 5% </span>
            cashback on Axis Bank Flipkart Debit Card
            <span className="text-blue-600 ml-2">T&C</span>
          </p>

          <p className="text-sm text-gray-700">
            •{" "}
            <span className="text-sm font-semibold">
              Special Price Get extra 58%
            </span>{" "}
            off (price inclusive of cashback/coupon)
            <span className="text-blue-600 ml-2">T&C</span>
          </p>
        </div>
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">Delivery</span>

          <input
            type="number"
            placeholder="Enter the code"
            className="border-b-2 border-gray-400 px-2 py-1 focus:border-blue-500 outline-none"
          />

          <button className="bg-zinc-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-lg ">
            Check
          </button>
        </span>
      </div>
    </div>
  );
};

export default SideNavbar;
