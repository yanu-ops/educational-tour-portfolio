import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaBook, FaUserGraduate, FaLandmark } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-900">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-white hover:scale-110 hover:drop-shadow-xl transition-transform duration-300"
      >
        Educational Tour Portfolio
      </Link>

      {/* Navigation Icons */}
      <ul className="flex space-x-8">
        {/* Companies */}
        <li className="flex flex-col items-center text-white cursor-pointer hover:scale-110 hover:drop-shadow-xl transition-transform duration-300">
          <Link to="/company" className="flex flex-col items-center">
            <FaBuilding size={24} />
            <span className="text-xs mt-1 text-center">Companies</span>
          </Link>
        </li>

        {/* Journal */}
        <li className="flex flex-col items-center text-white cursor-pointer hover:scale-110 hover:drop-shadow-xl transition-transform duration-300">
          <Link to="/journal" className="flex flex-col items-center">
            <FaBook size={24} />
            <span className="text-xs mt-1 text-center">Journal</span>
          </Link>
        </li>

        {/* Heritage Sites */}
        <li className="flex flex-col items-center text-white cursor-pointer hover:scale-110 hover:drop-shadow-xl transition-transform duration-300">
          <Link to="/heritage" className="flex flex-col items-center">
            <FaLandmark size={24} />
            <span className="text-xs mt-1 text-center">Heritage</span>
          </Link>
        </li>

        {/* Student Info */}
        <li className="flex flex-col items-center text-white cursor-pointer hover:scale-110 hover:drop-shadow-xl transition-transform duration-300">
          <Link to="/student-info" className="flex flex-col items-center">
            <FaUserGraduate size={24} />
            <span className="text-xs mt-1 text-center">Student</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
