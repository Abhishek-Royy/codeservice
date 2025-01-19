import React from "react";
import { motion } from "framer-motion";

const HowWeAddValue = () => {
  const cards = [
    {
      title: "Market Research",
      description:
        "The keystone to any communication. Focus on clearly defining the right target clients to understand their outlook and priorities to achieve great growth and great profits.",
      icon: "✏️",
      offset: "top-0", // No offset
    },
    {
      title: "Audience Analysis",
      description:
        "Selling doesn't work if you don't know who the buyer is. It is something every business owner needs to know, understand, do, revisit, and review.",
      icon: "👁️",
      offset: "top-4", // Slightly lower
    },
    {
      title: "Brainstorming and Strategy",
      description:
        "It's where a collective mind makes it matter! To reach specific business goals.",
      icon: "🧠",
      offset: "top-8", // Lower
    },
    {
      title: "Optimize & Innovate",
      description: "Click, click! Tap, tap! Camera, action and It's a wrap!",
      icon: "📸",
      offset: "top-2", // Slightly offset
    },
  ];

  return (
    <motion.div className="bg-gray-100 lg:h-[95vh] flex items-center justify-center flex-col lg:py-0 py-24 lg:px-32 px-2  ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#2B2F6F]">
          How We Add Value To Your Business
        </h2>
        <p className="text-[#383761] mt-4 lg:w-1/2 mx-auto">
          We Start Off Businesses For Digital Change by providing scalable web
          and mobile solutions coupled with digital marketing services under a
          single roof — without handoffs.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 8 }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-md flex flex-col items-center relative ${card.offset}`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-center mt-2 text-sm">{card.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HowWeAddValue;
