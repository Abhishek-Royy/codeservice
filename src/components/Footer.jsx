import React from "react";
import Logo from "../assets/navLogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-24" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            We are a full-service creative digital marketing agency based in
            Kolkata. We create super-rich experiences online for businesses.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="p-2 bg-blue-500 rounded-full hover:scale-[0.9]"
            >
              <FaFacebookSquare className="text-2xl " />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-400 rounded-full hover:scale-[0.9]"
            >
              <FaSquareXTwitter className="text-2xl " />
            </a>
            <a
              href="#"
              className="p-2 bg-pink-600 rounded-full hover:scale-[0.9]"
            >
              <FaSquareInstagram className="text-2xl " />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:scale-[0.9]"
            >
              <FaLinkedin className="text-2xl " />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Cancellation and Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <p>
            <strong>Head Office:</strong> <br />
            77, Elliot Road, 4th Floor, Kolkata - 700016
          </p>
          <p className="mt-4">
            <strong>Branch Office:</strong> <br />
            707, Vasant Valley Complex, Malad, Dindoshi, Mumbai - 400097
          </p>
          <p className="mt-4">
            Email:{" "}
            <a
              href="mailto:support@techskybird.com"
              className="hover:text-gray-400"
            >
              support@techskybird.com
            </a>
          </p>
          <p>Phone: +91-9147052200</p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>Copyright © 2025 Powered by CodeFusion Co.</p>
      </div>
    </footer>
  );
};

export default Footer;
