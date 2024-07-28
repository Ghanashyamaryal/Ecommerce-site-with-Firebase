import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/Slice";
import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState(cart.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {}));

    const handleDelete = (id) => {
        dispatch(remove(id));
    };

    const handleQuantityChange = (id, amount) => {
        setQuantities((prevQuantities) => {
            const newQuantities = { ...prevQuantities };
            newQuantities[id] = Math.max(1, newQuantities[id] + amount);
            return newQuantities;
        });
    };

    const total = cart.reduce((acc, product) => acc + (product.price * quantities[product.id]), 0);

    return (
        <div className="container mx-auto py-8">
            <h3 className="text-2xl font-bold mb-4">Cart</h3>
            <div className="cartWrapper grid gap-4">
                {cart.map((product) => (
                    <div key={product.id} className="cartCard flex items-center justify-between p-4 bg-white shadow rounded-lg">
                        <img src={product.image} alt={product.name} className="h-20 w-20 object-cover rounded" />
                        <div className="flex-1 ml-4">
                            <span className="text-lg font-semibold text-black">{product.name}</span>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="quantity-btn bg-purple-400 text-gray-700 px-4 py-2 rounded-l"
                                onClick={() => handleQuantityChange(product.id, -1)}
                            >
                                -
                            </button>
                            <span className="px-4 text-black">{quantities[product.id]}</span>
                            <button
                                className="quantity-btn bg-purple-400 text-gray-700 px-4 py-2 rounded-r"
                                onClick={() => handleQuantityChange(product.id, 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex-1 ml-4">
                            <span className="text-black">${(product.price * quantities[product.id]).toFixed(2)}</span>
                        </div>
                        <button
                            className="btn ml-2 bg-red-500 text-white py-2 px-4 rounded"
                            onClick={() => handleDelete(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="total mt-8 p-4 bg-gray-100 text-lg font-bold">
                Total Price: ${total.toFixed(2)}
            </div>
            <div className="total mt-8 p-4 bg-gray-100 text-lg font-bold">
                <button className="mt-4 right-1 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 focus:outline-none">
                Buy Now
            </button>
            </div>
            
        </div>
    );
};

export default Cart;
