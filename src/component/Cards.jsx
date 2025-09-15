import React from "react";

const Cards = () => {
  return (
    <>
      <div className="bg-zinc-100 p-8 relative">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          You might be interested in
        </h1>

        {/* Responsive Grid: 2 columns on small, 4 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
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

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/headphone/e/b/d/-original-imahfjh5yksyte8n.jpeg?q=90"
                alt="Headphones"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Headphones</h2>
              <p className="text-gray-500 text-sm mb-3">Upto 40% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://rukminim2.flixcart.com/image/400/400/xif0q/power-bank/l/b/y/-original-imahehchjmqcrs8z.jpeg?q=90"
                alt="Smartwatch"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Smartwatch</h2>
              <p className="text-gray-500 text-sm mb-3">Flat 30% Off</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 4 */}
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
    </>
  );
};

export default Cards;
