import React, { useState, useRef, useEffect } from "react";

const comments = [
  {
    author: "User 1",
    rating: 5,
    comment: "Excellent service! Highly recommend it.",
    color: "bg-gradient-to-r from-blue-200 to-blue-300", // Added color
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9d7BbE1riJFdkbc97xhb1azvToy5axM01w&s",
  },
  {
    author: "User 2",
    rating: 4,
    comment: "Good experience, but could be improved in some areas.",
    color: "bg-gradient-to-r from-green-200 to-green-300", // Added color
    image:
      "https://img.freepik.com/premium-photo/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28878.jpg?w=360",
  },
  {
    author: "User 3",
    rating: 3,
    comment: "Average service. Nothing special.",
    color: "bg-gradient-to-r from-yellow-200 to-yellow-300", // Added color
    image:
      "https://img.freepik.com/premium-photo/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28549.jpg?w=360",
  },
  {
    author: "User 4",
    rating: 5,
    comment: "Amazing experience! Will use again.",
    color: "bg-gradient-to-r from-purple-200 to-purple-300", // Added color
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3THCvODZlKTAHZ_0luXG52c0GC9lR7r3-TNskwhi5I7bY5UP937mDShBciUoJMmeUaUs&usqp=CAU",
  },
  {
    author: "User 5",
    rating: 2,
    comment: "Disappointing service. Not worth the price.",
    color: "bg-gradient-to-r from-red-200 to-red-300", // Added color
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/029/364/941/small_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg",
  },
  {
    author: "User 6",
    rating: 4,
    comment: "Pretty good",
    color: "bg-gradient-to-r from-pink-200 to-pink-300", // Added color
    image:
      "https://static.vecteezy.com/system/resources/previews/029/364/952/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg",
  },
  {
    author: "User 7",
    rating: 3,
    comment: "Okay service",
    color: "bg-gradient-to-r from-indigo-200 to-indigo-300", // Added color
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouzf_f-HnxQ-6Euu9xXSiBR8J6NCHI_fEqQ&s",
  },
];

const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-6 md:px-12 py-8 rounded-lg shadow-md mx-4 md:mx-8 ${comment.color}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-400 mr-4">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={comment.image}
                      alt={comment.author}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {comment.author}
                    </h3>
                    <div className="flex">{renderStars(comment.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
