// import React from "react";

// function Blog() {

//   const blogs = [
//     {
//       id: 1,
//       category: "Digital Marketing",
//       date: "22 Feb 2025",
//       title: "How the Right Shades Boost Conversions of Website",
//       description:
//         "Your favorite color might be costing you customers. While personal preferences play a role in design choices,…",
//       image:
//         "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1673383092/ComputerScience.org/day-in-the-life-of-a-software-dev/day-in-the-life-of-a-software-dev.jpg?_i=AA",
//       author: {
//         name: "Shalari Ghorai",
//         avatar:
//           "https://yt3.googleusercontent.com/qGrcViAdsmfdL8NhR03s6jZVi2AP4A03XeBFShu2M4Jd88k1fNXDnpMEmHU6CvNJuMyA2z1maA0=s900-c-k-c0x00ffffff-no-rj",
//       },
//     },
//     {
//       id: 2,
//       category: "Web Development",
//       date: "10 Mar 2025",
//       title: "Best UI/UX Practices for a Better User Experience",
//       description:
//         "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
//       author: {
//         name: "John Doe",
//         avatar:
//           "https://randomuser.me/api/portraits/men/45.jpg",
//       },
//     },
//     {
//       id: 3,
//       category: "Web Development",
//       date: "10 Mar 2025",
//       title: "Best UI/UX Practices for a Better User Experience",
//       description:
//         "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRJh5fzkogrIVhW8mM71_6Jw0zBLhQniUFw&s",
//       author: {
//         name: "John Doe",
//         avatar:
//           "https://randomuser.me/api/portraits/men/45.jpg",
//       },
//     },
//     {
//       id: 4,
//       category: "Web Development",
//       date: "10 Mar 2025",
//       title: "Best UI/UX Practices for a Better User Experience",
//       description:
//         "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEjY2kfF89-YpSJO5S3yddqKnC3xU8OiRmQ&s",
//       author: {
//         name: "John Doe",
//         avatar:
//           "https://randomuser.me/api/portraits/men/45.jpg",
//       },
//     },
//     {
//       id: 5,
//       category: "Web Development",
//       date: "10 Mar 2025",
//       title: "Best UI/UX Practices for a Better User Experience",
//       description:
//         "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSvmMoPQ6xT0sW1uzTqAUNX8kbKymkyB8LA&s",
//       author: {
//         name: "John Doe",
//         avatar:
//           "https://randomuser.me/api/portraits/men/45.jpg",
//       },
//     },
//   ];

//   return (
//     <>
//     <div className="main py-20 w-full h-auto flex flex-wrap items-center justify-between gap-10 lg:px-20">

//       {blogs.map((blog) => (
//         <div
//           key={blog.id}
//           className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
//         >
//           <img
//             className="w-full h-48 object-cover"
//             src={blog.image}
//             alt={blog.title}
//           />
//           <div className="p-4">
//             <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
//               {blog.category}
//             </span>
//             <span className="text-gray-500 text-sm float-right">Date: {blog.date}</span>
//             <h2 className="text-gray-900 font-semibold text-lg mt-2">
//               {blog.title}
//             </h2>
//             <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
//             <div className="flex items-center mt-4">
//               <img
//                 className="w-10 h-10 rounded-full object-cover"
//                 src={blog.author.avatar}
//                 alt={blog.author.name}
//               />
//               <span className="ml-3 text-gray-900 font-medium">{blog.author.name}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     </>
//   );
// }

// export default Blog;

import React, { useState } from "react";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      category: "Digital Marketing",
      date: "22 Feb 2025",
      title: "How the Right Shades Boost Conversions of Website",
      description:
        "Your favorite color might be costing you customers. While personal preferences play a role in design choices,…",
      content:
        "Your favorite color might be costing you customers. While personal preferences play a role in design choices, data-driven color selection can significantly improve user engagement and conversions. Understanding color psychology and testing various palettes can lead to a better user experience and higher conversion rates.",
      image:
        "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1673383092/ComputerScience.org/day-in-the-life-of-a-software-dev/day-in-the-life-of-a-software-dev.jpg?_i=AA",
      author: {
        name: "Shalari Ghorai",
        avatar:
          "https://yt3.googleusercontent.com/qGrcViAdsmfdL8NhR03s6jZVi2AP4A03XeBFShu2M4Jd88k1fNXDnpMEmHU6CvNJuMyA2z1maA0=s900-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: 2,
      category: "Web Development",
      date: "10 Mar 2025",
      title: "Best UI/UX Practices for a Better User Experience",
      description:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
      content:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement. This includes proper spacing, intuitive navigation, effective typography, and responsive design principles that make websites accessible and user-friendly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
    {
      id: 2,
      category: "Web Development",
      date: "10 Mar 2025",
      title: "Best UI/UX Practices for a Better User Experience",
      description:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
      content:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement. This includes proper spacing, intuitive navigation, effective typography, and responsive design principles that make websites accessible and user-friendly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
    {
      id: 2,
      category: "Web Development",
      date: "10 Mar 2025",
      title: "Best UI/UX Practices for a Better User Experience",
      description:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
      content:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement. This includes proper spacing, intuitive navigation, effective typography, and responsive design principles that make websites accessible and user-friendly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
    {
      id: 2,
      category: "Web Development",
      date: "10 Mar 2025",
      title: "Best UI/UX Practices for a Better User Experience",
      description:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
      content:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement. This includes proper spacing, intuitive navigation, effective typography, and responsive design principles that make websites accessible and user-friendly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
    {
      id: 2,
      category: "Web Development",
      date: "10 Mar 2025",
      title: "Best UI/UX Practices for a Better User Experience",
      description:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement…",
      content:
        "A well-structured UI can make or break your website. Learn the best practices to improve usability and engagement. This includes proper spacing, intuitive navigation, effective typography, and responsive design principles that make websites accessible and user-friendly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohl896jqyxKsh1AhhN7ogqFnZpUVuhx8RYA&s",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
  ];

  return (
    <div className="py-20 w-full h-auto flex flex-wrap items-center justify-between gap-10 lg:px-20">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => setSelectedBlog(blog)}
          className="cursor-pointer max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={blog.image}
            alt={blog.title}
          />
          <div className="p-4">
            <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-gray-500 text-sm float-right">
              Date: {blog.date}
            </span>
            <h2 className="text-gray-900 font-semibold text-lg mt-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={blog.author.avatar}
                alt={blog.author.name}
              />
              <span className="ml-3 text-gray-900 font-medium">
                {blog.author.name}
              </span>
            </div>
          </div>
        </div>
      ))}

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 my-10 ">
          <div className="bg-white w-11/12 md:w-4/5 lg:w-9/10 h-5/6 rounded-lg shadow-lg p-6 relative flex flex-col">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
            >
              ✕
            </button>
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={selectedBlog.image}
              alt={selectedBlog.title}
            />
            <div className="flex-grow overflow-auto p-4">
              <h2 className="text-gray-900 font-semibold text-2xl">
                {selectedBlog.title}
              </h2>
              <p className="text-gray-600 mt-2">{selectedBlog.content}</p>
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={selectedBlog.author.avatar}
                  alt={selectedBlog.author.name}
                />
                <span className="ml-3 text-gray-900 font-medium text-lg">
                  {selectedBlog.author.name}
                </span>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Date: {selectedBlog.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
