import React from "react";

const Description = () => {
  return (
    <div className="w-full bg-zinc-100 p-8 overflow-auto flex gap-7">
     
      <div className="w-1/2 font-semibold hover:text-blue-600">
        <h3 className="mb-2">Description</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-4">
          Titan Mirage with 1.96&quot; AMOLED Display, Industry Best 410x502
          Pixel Resolution with AOD, Functional Crown, Split Screen, SingleSync
          BT Calling, Advanced 60+ Sports Modes with Auto Multisport
          Recognition, Auto Stress and Mood Monitor, 24x7 HRM, SpO2, Sleep
          Monitor, 100+ Watchfaces, SOS Calling.
        </p>
      </div>
      <div className="w-1/2 font-semibold hover:text-blue-600">
        <h3 className="mb-2">Highlights</h3>
        <div className="text-sm text-gray-700 leading-relaxed mt-4 flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></span>
            <span>
              4.97 cm (1.96) AMOLED Display with AOD and Industry Best 410 x 502
              Pixel Resolution and Functional Crown
            </span>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></span>
            <span>
              Functional Crown with Premium Metal Body Design and available in
              Fashionable Mesh & Leather Straps
            </span>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></span>
            <span>SingleSync BT Calling with Favourite Contacts Storage</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></span>
            <span>
              60+ Sports Modes with Auto Multisport Recognition and
              Comprehensive 24x7 Health Suite with Auto Stress and Mood Monitor,
              Heart Rate Monitor, SpO2 and Sleep Monitor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
