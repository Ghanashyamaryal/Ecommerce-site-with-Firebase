import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../../FirebaseConfigue';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import Search from '../Search/Search';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/Home" || location.pathname === "/";

  useEffect(() => {
    // Check authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-slate-800 text-white rounded-md shadow-md ${isMenuOpen ? 'h-auto' : 'h-16'} flex flex-col md:flex-row items-center`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center w-full">
        <Link to="/" className="text-lg font-bold tracking-wide">
          SFG
        </Link>

        {!isHomePage && (
          <div className="flex-grow md:flex-grow-0 md:w-1/3">
            <Search />
          </div>
        )}

        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none transition duration-200 ease-in-out"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:items-center w-full`}>
        <nav className="flex flex-col md:flex-row md:space-x-6 w-full">
          <Link to="/Home" className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4">
            Products
          </Link>
          <Link to="/Cart" className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4">
            Cart
          </Link>
          {user && (
            <button
              className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>

        {!user && (
          <div className="flex flex-col md:flex-row md:space-x-6 items-start md:items-center w-full">
            <Link to="/Login" className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4">
              Login
            </Link>
            <Link to="/Signin" className="text-gray-300 hover:text-white transition duration-200 ease-in-out py-2 px-4">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
