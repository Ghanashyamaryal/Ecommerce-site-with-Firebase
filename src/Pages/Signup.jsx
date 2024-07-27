import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfigue';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before each attempt

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Login');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('User already exists with this email.');
      } else {
        setErrorMessage('Error signing up. Please try again.');
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#5380a5] to-[#ADBBDA]">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-3 leading-tight text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">
              {errorMessage}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-3 font-semibold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
