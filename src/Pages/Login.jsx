import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfigue';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before each attempt

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/products');
    } 
    catch (error) {
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email address.');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password.');
      } else {
        setErrorMessage('Error logging in. Please try again.');
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#9db4f4] to-[#ADBBDA]">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">Login To Continue</h2>
        <form onSubmit={handleLogin}>
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
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
