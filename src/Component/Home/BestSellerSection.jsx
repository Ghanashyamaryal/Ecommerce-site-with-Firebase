import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import products from "../../products.json";
import "./Home.css"

const BestSellerSection = () => {
  const bestSellers = products.filter(product => product.rating.count > 200).slice(0, 10);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8">
     <h1 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
  BEST SELLERS
</h1>

      <div className="relative">
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft />
        </button>
        <div ref={scrollContainerRef} className="overflow-x-auto flex space-x-4">
          <div className="flex space-x-4">
            {bestSellers.map(product => (
              <motion.div
                key={product.id}
                className="product-card bg-white p-4 rounded-lg shadow-md min-w-[300px] w-1/4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Buy Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default BestSellerSection;
