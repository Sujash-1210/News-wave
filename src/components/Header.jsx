import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import menuicon from "../assets/menu_icon.svg";
import crossicon from "../assets/cross_icon.png";
import { Link, NavLink } from "react-router-dom";

const Header = ({ setCategory }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/">
          <img
            src={logo}
            alt="Newswave Logo"
            className="h-11 w-22 md:h-13 md:w-26 mr-6 rounded-md cursor-pointer"
            onClick={() => setCategory("general")}
          />
        </Link>
        <div className="hidden lg:flex space-x-6 text-gray-300">
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("technology")}
          >
            Technology
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("business")}
          >
            Business
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("health")}
          >
            Health
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("science")}
          >
            Science
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("entertainment")}
          >
            Entertainment
          </div>
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setCategory("sports")}
          >
            Sports
          </div>
        </div>
        <Link to="/contact">
          <button className="hidden md:flex bg-white text-sm px-8 py-3 cursor-pointer rounded-lg font-medium hover:bg-gray-600 hover:text-white">
            Contact Us
          </button>
        </Link>
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden invert-100 float-end"
          src={menuicon}
          alt=""
        />
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 overflow-hidden z-20 bg-gray-800 opacity-95 text-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <img className="w-22" src={logo} alt="" />
            <img
              className="w-7 invert-100"
              onClick={() => setShowMenu(false)}
              src={crossicon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center font-medium gap-0.5 mt-5 px-5 text-lg">
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("general");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("technology");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Technology</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("business");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Business</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("health");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Health</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("sports");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Sports</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("science");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Science</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("entertainment");
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block ">Entertainment</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
                setCategory("technology");
              }}
              to="/contact"
            >
              <p className="px-4 py-2 rounded inline-block ">Contact Us</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Icons for menu open/close

// const Header = ({ categories }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-dark text-white p-4 flex justify-between items-center">
//       <h1 className="text-2xl">NewsWave</h1>

//       {/* Menu for large screens */}
//       <nav className="hidden md:flex space-x-6">
//         <Link to="/" className="hover:text-blue-400">
//           Home
//         </Link>
//         {categories.map((category) => (
//           <Link
//             key={category}
//             to={`/?category=${category}`}
//             className="hover:text-blue-400"
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </Link>
//         ))}
//         <Link
//           to="/contact"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Contact Us
//         </Link>
//       </nav>

//       {/* Hamburger Menu for small screens */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu}>
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="hover:text-blue-400"
//           >
//             Home
//           </Link>
//           {categories.map((category) => (
//             <Link
//               key={category}
//               to={`/?category=${category}`}
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-blue-400"
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
