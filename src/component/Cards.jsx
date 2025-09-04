import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-full bg-gray-100 flex justify-around p-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
         
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/watch/r/f/q/1-1221-rls-boys-girls-original-imahffhf2f7f4hzg.jpeg?q=90"
                alt="Power"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Power Banks
              </h2>
              <p className="text-gray-500 text-sm mb-3">Min. 50% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

       
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/headphone/e/b/d/-original-imahfjh5yksyte8n.jpeg?q=90"
                alt="Headphones"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Headphones
              </h2>
              <p className="text-gray-500 text-sm mb-3">Upto 40% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/power-bank/l/b/y/-original-imahehchjmqcrs8z.jpeg?q=90"
                alt="Smartwatch"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Smartwatch
              </h2>
              <p className="text-gray-500 text-sm mb-3">Flat 30% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/shoe/v/e/j/-original-imaheyc22hkvnmx7.jpeg?q=90"
                alt="Shoes"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Shoes</h2>
              <p className="text-gray-500 text-sm mb-3">Upto 40% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>
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

export default Cards;
