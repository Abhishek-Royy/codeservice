import React from "react";
import Navbar from "../components/Navbar";

import Background from "../assets/bg1.webp";
import Background2 from "../assets/bg2.webp";
import BlockCard from "./BlockCard";
import HowWeAddValue from "./HowWeAddValue";
import BusinessServiceHero from "../components/BusinessServiceHero";

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

        {/* ****************************************** */}

        <section className="py-12 px-6 md:px-20 lg:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2F6F]">
              We Are Defined Not By Our Words But By Our Works.
            </h2>
            <p className="mt-4 text-[#2B2F6F]">
              We, Tech Sky Bird, offer you{" "}
              <span className="font-bold">
                The Best Digital Marketing Services in India
              </span>
              . Regardless of whether you are running a large-scale or a
              small-scale business, we completely understand the value of your
              business and dedicate our efforts to implementing marketing
              strategies for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-500 p-4 rounded-full text-white">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3m6 18h5m-5-9h5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2B2F6F]">
                  Digital Marketing
                </h3>
              </div>
              <p className="text-[#2B2F6F]">
                Tech Sky Bird is the best digital marketing company in Kolkata,
                offering varied digital advertising services to an ever-growing
                roster of clients.
              </p>
            </div>

            {/* Creative Design */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-500 p-4 rounded-full text-white">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4m16 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2B2F6F]">
                  Creative Design
                </h3>
              </div>
              <p className="text-[#2B2F6F]">
                With our logo, flyers, and graphic design services, we aim not
                only to create but also to build businesses.
              </p>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-500 p-4 rounded-full text-white">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636L12 12m6.364-6.364L18.364 12M6 18l6-6m-6 6L5.636 6M21 21L12 12m0 0L3 21"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2B2F6F]">
                  Social Media Marketing
                </h3>
              </div>
              <p className="text-[#2B2F6F]">
                As the best social media marketing company in Kolkata, we help
                you create innovative posts, videos, and graphics that engage
                your audiences.
              </p>
            </div>
          </div>
        </section>

        {/* ************************************************************** */}
        <div className="sec-3  w-full min-h-[100vh] ">
          <BlockCard />
        </div>

        {/* ********************************************************* */}

        <div>
          <HowWeAddValue />
        </div>

    

        {/* **************************************************************** */}

        {/* <div className="w-full min-h-[100vh] bg-[#1B293B]">
          <img
            src={Background2}
            alt=""
            className="opacity-[0.2] w-full h-full bg-cover"
          />
          dsvndsjkbv
        </div> */}
        <div className="relative w-full min-h-[100vh] bg-[#1B293B] flex item-center justify-center">
          {/* Background Image */}
          <img
            src={Background2}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          />

          {/* Overlay Text Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-12">
            <p className="text-xl md:text-lg font-bold mb-6 text-[#CD2234]">WHY CHOOSE US</p>
            <p className="text-3xl md:text-4xl mb-10 max-w-2xl">
              With the right tools, you can create powerful online campaigns
              that will help your business reach a wider audience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg shadow-md transform translate-y-6">
                <h3 className="text-xl font-semibold mb-3">
                  LEADING DIGITAL MARKETING COMPANY
                </h3>
                <p className="text-sm">
                  Tech Sky Bird is A Leading Digital Marketing Company in
                  Kolkata . We offer customized deals and effective digital
                  marketing solutions for every business either big or small.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6 rounded-lg shadow-md transform -translate-y-4">
                <h3 className="text-xl font-semibold mb-3">TRUST & DELIVERY</h3>
                <p className="text-sm">
                  We are entrusted to providing our clients with exceptional
                  customer service that offers the support they need at every
                  step.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-lg shadow-md transform translate-y-8">
                <h3 className="text-xl font-semibold mb-3">UNIQUE BUSINESS</h3>
                <p className="text-sm">
                  Our team of expert professionals is dedicated to creating
                  effective digital marketing strategies that deliver results.
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg shadow-md transform -translate-y-2">
                <h3 className="text-xl font-semibold mb-3">
                  CUSTOMIZED SOLUTION
                </h3>
                <p className="text-sm">
                  We work closely with each client to understand their unique
                  requirements and provide a customized solution for their
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>


            {/* ******************************************** */}
            <div >
          <BusinessServiceHero/>
        </div>
      </div>
    </>
  );
}

export default Home;
