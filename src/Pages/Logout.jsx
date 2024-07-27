import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseConfigue';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to the login page after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default Logout;
