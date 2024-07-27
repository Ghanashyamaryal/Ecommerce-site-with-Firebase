import React from 'react';
import { useParams } from 'react-router';
import products from "../../public/productjson.json";
import {add} from "../Store/Slice"
 import {useDispatch} from "react-redux"
 
const ProductDetail = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = products.find(product => product.id == parseInt(productId));

    const handlecart = (product)=>{
        console.log("ok")
        dispatch(add(product))

 }
    if (!product) {
        return <div className="flex justify-center items-center h-screen">Product not found!</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold mb-4 text-center  text-black">{product.name}</h2>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover shadow-md rounded-lg mb-4"
                />
                <p className="text-lg mb-2  text-black">Description: {product.description}</p>
                <p className="text-xl font-bold text-blue-600 ">Price: ${product.price}</p>
                <div className="btn-container">
                            <button className="btn" onClick={()=>handlecart(product)} >
                                Add to Cart
                            </button>
                            <button className="btn buy-btn ml-4" >
                                Buy Now
                            </button>
                </div>
            </div>
        </div>
    );
}


export default ProductDetail;