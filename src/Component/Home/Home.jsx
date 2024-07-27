import React from 'react';
import AllProduct from '../../Pages/AllProduct';
import Search from '../Search/Search';
import TestimonialSection from './customermsg';
import NewForYou from './Newforyou';

const Home = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <div
          className="hero-section relative bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          <div className="overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="content relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="title text-4xl md:text-6xl font-bold mb-4">Discover the Beauty of Fine Jewelry</h1>
            <p className="subtitle text-lg md:text-2xl mb-8">Elegant designs crafted to perfection</p>
            <div className="w-full max-w-md">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <NewForYou />
        <TestimonialSection />
      </div>
    </>
  );
};

export default Home;
