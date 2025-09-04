import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiSpeedMiniFill } from "react-icons/ri";
import ReactImageMagnify from "react-image-magnify";
import Description from "./Description";

const images = [
  "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/n/4/i/-original-imagwk3hcsbffnfr.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/l/m/y/-original-imagwk3hppm4twkr.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/5/t/w/-original-imagwk3hwezp8pur.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/d/8/2/-original-imagwk3hp5ayrvmt.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/720/720/xif0q/smartwatch/v/e/b/-original-imagwk3hgdzfbg7g.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/b/m/h/-original-imagwk3hnkukjtqf.jpeg?q=70&crop=false",
];

const Sidebar = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [thumbsHeight, setThumbsHeight] = useState(null);
  const thumbsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (thumbsRef.current) {
        setThumbsHeight(thumbsRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [selectedImage]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
        <div className="border border-[#ddd] rounded-lg bg-white p-4 flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-auto">
          <div
            ref={thumbsRef}
            className="flex lg:flex-col gap-3 lg:w-28 justify-center items-center"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden cursor-pointer border-2 transition ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail `}
                  className="w-20 h-25 object-cover"
                />
              </div>
            ))}
          </div>

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

        
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center relative z-50">
          <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white font-medium py-3 px-6 rounded w-full sm:w-1/2 md:w-40">
            <FaShoppingCart className="text-lg" />
            Add to Cart
          </button>
          <button className="flex items-center justify-center gap-2 bg-orange-600 text-white font-medium py-3 px-6 rounded w-full sm:w-1/2 md:w-40">
            <RiSpeedMiniFill />
            Buy Now
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[800px] bg-zinc-100 p-4 sm:p-6 rounded lg:sticky lg:top-4 self-start">
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-2">
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
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
              ₹2,499
            </span>
            <span className="text-sm sm:text-base text-gray-500 line-through">
              ₹5,999
            </span>
            <span className="text-sm sm:text-base text-green-500">58% off</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            + ₹19 Protect Promise Fee
          </div>
          <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Secure delivery by 5 Sep, Friday
          </div>
        </div>
        <div className="mb-6 leading-relaxed">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
            Available offers
          </h3>
          {[
            "Bank Offer 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter",
            "Bank Offer 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter",
            "Bank Offer 5% cashback on Axis Bank Flipkart Debit Card",
            "Special Price Get extra 58% off (price inclusive of cashback/coupon)",
          ].map((offer, i) => (
            <p key={i} className="text-xs sm:text-sm text-gray-700 mb-2">
              • <span className="font-semibold">{offer.split(" ")[0]} </span>
              {offer}
              <span className="text-blue-600 ml-2">T&C</span>
            </p>
          ))}
        </div>
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">Delivery</span>
          <input
            type="number"
            placeholder="Enter the code"
            className="border-b-2 border-gray-400 px-2 py-1 focus:border-blue-500 outline-none text-sm"
          />
          <button className="bg-zinc-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-lg">
            Check
          </button>
        </span>
        <Description />
      </div>
    </div>
  );
};

export default Sidebar;
