import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0A1523] to-slate-800 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-[#ffffffa7] rounded-2xl shadow-2xl p-6 sm:p-12 mt-10 mb-20 ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-gray-600 mt-2">
              We would love to hear from you! Fill out the form below, and we’ll
              get back to you as soon as possible.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
  <label className="block text-sm font-medium text-gray-700">
    Subject
  </label>
  <select
    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    name="subject"
    id="subject"
  >
    <option value="none" selected>
      --None--
    </option>
    <option value="Software Development">Software Development</option>
    <option value="Web Development">Web Development</option>
    <option value="App Development">App Development</option>
    <option value="SEO Management">SEO Management</option>
    <option value="Data Analyst">Data Analyst</option>
  </select>
</div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
