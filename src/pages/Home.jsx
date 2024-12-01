import React from "react";
import Navbar from "../components/Navbar";

import Background from "../assets/bg1.webp";

function Home() {
  return (
    <>
      <div className="main-wrapper w-full h-auto">
        <div
          className="main w-full lg:h-[100vh] h-auto relative"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Navbar */}
          <Navbar />

          {/* Content Section */}
          <div className="cont-1 lg:w-full lg:h-[88vh] h-auto w-[95%] mx-auto px-0  lg:px-20 lg:flex items-center relative z-10 py-20">
            {/* Left Content */}
            <div className="cont1-left w-full lg:w-1/2 h-full flex flex-col justify-center lg:text-left text-center space-y-6">
              <p className="text-[#CD222B] font-semibold text-lg ">
                START YOUR DIGITAL BUSINESS
              </p>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                One-Stop Digital Solution For Your Business Growth
              </h1>
              <p className="text-white text-base leading-relaxed">
                Tech Sky Bird is a full-service digital marketing firm offering
                a broad range of online advertising services with a mission to
                give wings to your dreams and ideas. We keep up the client’s
                online presence and make sure a good ROI with the impetus of
                engaging content, responsive and scalable website design,
                graphics, and overall marketing expertise.
              </p>
              <div className="lg:flex gap-4 w-full">
                <button className="py-3 lg:w-[160px] w-full bg-[#CD2234] text-white font-semibold rounded-md hover:bg-[#008FF2] transition duration-300">
                  Get Started
                </button>
                <button className="py-3 lg:w-[160px] w-full mt-5 border border-white text-white font-semibold rounded-md hover:bg-[#008FF2] transition duration-300">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="cont1-right w-full lg:w-1/2 h-full flex items-center justify-center">
              <img
                src="https://www.innovativedigitalmarketing.in/Blog/wp-content/uploads/2019/04/s3-tree.gif"
                alt="Business Growth"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ************************************ */}
        <div className="sec-2 w-full min-h-[100vh] py-20 px-0 flex flex-col items-center lg:px-20">
          <p className="text-center text-lg text-[#CD2234]">WHAT TO DO</p>
          <h1 className="text-center text-4xl font-bold lg:w-1/2 mx-auto text-[#2B2F6F] mt-5">
            We Offer Top to Bottom Solutions For Your Online Presence
          </h1>

          <div className="card-box-1 w-full min-h-[550px] flex flex-wrap justify-center gap-6 p-2 mt-10">
            {/* Card 1 */}
            <div className="bg-[#102a43] text-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#57a4ff] mb-4">
                Website Design
              </h2>
              <p className="text-base mb-6">
                We are among{" "}
                <strong>
                  The Best Website Designing and Development Company In Kolkata
                </strong>{" "}
                that have the experience and professionals to build a custom
                website and use multiple digital marketing services to assist
                any business.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://i0.wp.com/techskybird.com/wp-content/uploads/2023/06/web-design.png?w=580&ssl=1" // Replace this with your image URL
                  alt="Website Design"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#102a43] text-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#57a4ff] mb-4">
                Social Media Marketing
              </h2>
              <p className="text-base mb-6">
                Build a strong social media presence with our effective and{" "}
                <strong>Best Social Media Marketing Strategy.</strong> We manage
                and produce social content and set up advertisements on social
                platforms like YouTube, Facebook, and Instagram.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://i0.wp.com/techskybird.com/wp-content/uploads/2023/06/social-media.png?w=417&ssl=1" // Replace this with your image URL
                  alt="Website Design"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#102a43] text-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#57a4ff] mb-4">
                Graphic Design
              </h2>
              <p className="text-base mb-6">
                We know that a picture is worth a thousand words. We at Tech Sky
                Bird,{" "}
                <strong>The Best Graphic Design Company In Kolkata</strong>{" "}
                understand your idea and turn it into a picture that your
                customer can relate to.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://i0.wp.com/techskybird.com/wp-content/uploads/2023/06/web-design-2.png?fit=315%2C315&ssl=1" // Replace this with your image URL
                  alt="Website Design"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          <button className="py-4 w-[160px]  mt-10 bg-[#CD2234] text-white font-semibold rounded-md hover:bg-[#008FF2] transition duration-300">
            More Services
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
