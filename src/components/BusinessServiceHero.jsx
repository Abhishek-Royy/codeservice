import React from "react";

const BusinessServiceHero = () => {
  return (
    <div className="bg-[#1B293B] my-10 flex justify-center items-center min-h-[60vh] lg:w-[80%] w-[95%] mx-auto rounded-lg ">
      <div className="w-full mx-auto p-6 bg-darkBlue rounded-lg flex flex-col item-center justify-center h-full lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Get the Best Business Service That Your Company Needs
          </h1>
          <p className="text-gray-300 mt-4">
            Get connected with our people who navigate your business to the
            right platforms, so that your business can get the exposure and
            traction that it deserves.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">
            Get Started
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img
            src="https://i0.wp.com/techskybird.com/wp-content/uploads/2023/05/img_team.png?w=600&ssl=1"
            alt="Business Person"
            className="rounded-lg shadow-lg w-82 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessServiceHero;
