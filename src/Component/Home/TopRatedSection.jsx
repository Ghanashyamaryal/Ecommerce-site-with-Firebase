import React from 'react';
import { motion } from 'framer-motion';
import products from "../../products.json";

const TopRatedSection = () => {
    const topRated = products.filter(product => product.rating.rate > 4.5).slice(0, 4);

    return (
        <section className="py-8">
            <h1 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
                TOP RATED SECTION
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {topRated.map(product => (
                    <motion.div
                        key={product.id}
                        className="product-card bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold mt-2 text-black">{product.name} </h3>
                        <h3 className="text-lg font-semibold mt-2 text-black">{product.rating.rate} </h3>
                        <span className="text-yellow-500 mr-2">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <div className="flex justify-between items-center mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Buy Now</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TopRatedSection;
