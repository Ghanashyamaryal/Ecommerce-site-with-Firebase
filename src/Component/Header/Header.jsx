import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../../FirebaseConfigue';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import Search from '../Search/Search';
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  useEffect(() => {
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
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          SFG
        </Link>

        {!isHomePage && (
          <div className="flex-grow md:flex-grow-0 md:w-1/3 hidden md:block">
            <Search />
          </div>
        )}

        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:flex-row md:items-center md:space-x-6`}>
          <Link to="/Home" className={`py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out ${isHomePage ? 'font-bold' : ''}`}>
            Home
          </Link>
          <Link to="/products" className="py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out">
            Products
          </Link>
          <Link
            to="/Cart"
            className="py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out h-16 w-16 flex items-center justify-center"
          >
            <PiShoppingCartSimpleLight className="h-6 w-6" />
          </Link>

          {user ? (
            <button
              className="py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/Login" className="py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out">
                Login
              </Link>
              <Link to="/Signin" className="py-2 px-4 text-gray-300 hover:text-white transition duration-200 ease-in-out">
                Sign In
              </Link>
            </>
          )}
        </nav>
      </div>

      {!isHomePage && isMenuOpen && (
        <div className="px-4 py-4 md:hidden">
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
