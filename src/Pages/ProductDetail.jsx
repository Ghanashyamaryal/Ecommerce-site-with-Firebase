import React, { useState } from 'react';
import { useParams } from 'react-router';
import products from "../../public/productjson.json";
import { add } from "../Store/Slice";
import { useDispatch } from "react-redux";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = products.find(product => product.id == parseInt(productId));

    const [isFavorite, setIsFavorite] = useState(false);

    const handleCart = (product) => {
        dispatch(add(product));
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    if (!product) {
        return <div className="flex justify-center items-center h-screen text-xl">Product not found!</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full lg:flex">
                <div className="lg:w-1/2 w-full flex justify-center items-center mb-4 lg:mb-0">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-black">{product.name}</h2>
                        <button 
                            onClick={toggleFavorite} 
                            className="text-red-500 text-2xl"
                        >
                            {isFavorite ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                    <p className="text-lg mb-2 text-black mt-2">Description: {product.description}</p>
                    <p className="text-xl font-bold text-blue-600 mb-2">Price: ${product.price}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 mr-2">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <span className="text-gray-600">4.0</span>
                    </div>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg mr-2 hover:bg-blue-600"
                            onClick={() => handleCart(product)}
                        >
                            Add to Cart
                        </button>
                        <button 
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg ml-2 hover:bg-green-600"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
