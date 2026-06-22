import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"
import {
  Menu,
  Close,
  LightMode,
  DarkMode,
} from "@mui/icons-material";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
 const {darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-slate-300  dark:bg-slate-800 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between justify-center">

      

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 ">

          <Link
            to="/"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/skills"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            Contact
          </Link>
          

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="bg-gray-200  dark:bg-gray-700 p-2 rounded-full"
          >
            {darkMode ? (
              <LightMode className="text-yellow-400" />
            ) : (
              <DarkMode className="text-gray-800" />
            )}
          </button>

        </nav>

        {/* MOBILE BUTTONS */}
        <div className="flex items-center gap-3 md:hidden">

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white"
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>

{/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="bg-red-200 dark:bg-gray-700 p-2 rounded-full"
          >
            {darkMode ? (
              <LightMode className="text-yellow-400" />
            ) : (
              <DarkMode className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-5 space-y-4">


<Link
            to="/"
            className="block text-gray-700 dark:text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block text-gray-700 dark:text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/projects"
            className="block text-gray-700 dark:text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/skills"
            className="block text-gray-700 dark:text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 dark:text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </header>
  );
};

export default Nav;