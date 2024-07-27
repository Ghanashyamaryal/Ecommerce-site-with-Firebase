import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/Slice";
import React from 'react';
import './Cart.css'; // Import the external CSS file

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(remove(id));
    };

    const total = cart.reduce((acc, b) => acc + b.price, 0);

    return (
        <div className="container mx-auto py-8">
            <h3 className="text-2xl font-bold mb-4">Cart</h3>
            <div className="cartWrapper grid gap-4">
                {cart.map((product) => (
                   <div key={product.id} className="cartCard flex items-center justify-between p-4 bg-white shadow rounded-lg">
                   <img src={product.image} alt={product.name} className="h-20 w-20 object-cover rounded" />
               
                   <div className="flex-1 ml-4">
                       <div className="flex items-center justify-between">
                           <div className="flex-1">
                               <span className="text-lg font-semibold text-black">{product.name}</span>
                               <span className="text-black ml-2">${product.price}</span>
                           </div>
                           <button
                               className="btn ml-2"
                               onClick={() => handleDelete(product.id)}
                           >
                               Remove
                           </button>
                       </div>
                   </div>
               </div>
               
                ))}
            </div>
            <div className="total mt-8 p-4 bg-gray-100 text-lg font-bold">
                Total Price: ${total}
            </div>
        </div>
    );
};

export default Cart;
