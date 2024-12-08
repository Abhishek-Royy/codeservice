// import React, { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { RiMenu3Fill } from "react-icons/ri";
// // import webLogo from "../assets/phenioxLogo.png";
// import Logo from "../assets/navLogo.png";

// import { motion } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("");

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { id: 1, text: "HOME", route: "/" },
//     { id: 2, text: "ABOUT", route: "/about" },
//     { id: 3, text: "SERVICE", route: "/services" },
//     { id: 4, text: "CUSTOMER", route: "/customer" },

//     { id: 5, text: "CONTACT US", route: "/contact-us" },
//   ];

//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "100%" },
//   };

//   return (
//     <motion.div
//       className="bg-transparent flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-2 md:px-20 text-white z-[999999999]"
//       style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
//     >
//       <Link to="/">
//         {/* <img className="w-[150px] object-contain" src={webLogo} alt="Web-logo" /> */}
//         <img
//           className="w-[100px] object-contain dark:invert dark:hue-rotate-180"
//           src={Logo}
//           alt="Web-logo"
//         />
//       </Link>
//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex items-center">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300  ${
//               activeMenu === item.text ? "active" : ""
//             }`}
//             onMouseEnter={() => setActiveMenu(item.text)}
//             onMouseLeave={() => setActiveMenu("")}
//           >
//             <NavLink to={item.route} className="flex items-center">
//               {item.text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Menu Toggle */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
//       </div>
//       {/* Mobile Navigation Menu */}
//       <motion.ul
//         initial={false}
//         animate={nav ? "open" : "closed"}
//         variants={variants}
//         className={`fixed md:hidden left-0 top-20 w-full h-full border-r border-r-gray-900 bg-white dark:bg-[#101A26] ease-linear duration-75 ${
//           nav ? "block" : "hidden"
//         }`}
//       >
//         {/* <img className="w-20 m-4" src={webLogo} alt="Web-logo" /> */}
//         {navItems.map((item) => (
//           <NavLink to={item.route} onClick={() => setNav(false)}>
//             <li
//               key={item.id}
//               className=" p-4 text-center text-3xl   rounded-xl duration-300 hover:text-black dark:text-white  cursor-pointer  my-5"
//             >
//               {item.text}
//             </li>
//           </NavLink>
//         ))}
//       </motion.ul>
//     </motion.div>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../assets/navLogo.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "HOME", route: "/" },
    { id: 2, text: "ABOUT", route: "/about" },
    { id: 3, text: "SERVICE", route: "/service" },
    { id: 4, text: "CUSTOMER", route: "/customer" },
    { id: 5, text: "CONTACT US", route: "/contact-us" },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      className={`bg-transparent flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-2 md:px-20 text-white z-[999999999] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Link to="/">
        <img
          className="w-[100px] object-contain dark:invert dark:hue-rotate-180"
          src={Logo}
          alt="Web-logo"
        />
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300 ${
              activeMenu === item.text ? "active" : ""
            }`}
            onMouseEnter={() => setActiveMenu(item.text)}
            onMouseLeave={() => setActiveMenu("")}
          >
            <NavLink to={item.route} className="flex items-center">
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <motion.ul
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={variants}
        className={`fixed md:hidden left-0 top-20 w-full h-full border-r border-r-gray-900 bg-white dark:bg-[#101A26] ease-linear duration-75 ${
          nav ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <NavLink to={item.route} onClick={() => setNav(false)} key={item.id}>
            <li className="p-4 text-center text-3xl rounded-xl duration-300 hover:text-black dark:text-white cursor-pointer my-5">
              {item.text}
            </li>
          </NavLink>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
