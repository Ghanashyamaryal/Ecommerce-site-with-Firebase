import React, { useState } from 'react';
import products from "../../public/productjson.json"; 
import { add } from "../Store/Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import "./Allproduct.css"

const AllProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // for pagination
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;

    const offset = currentPage * productsPerPage;
    const currentProducts = products.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(products.length / productsPerPage);

    //for redux 
    const handleCart = (product) => {
        dispatch(add(product));
    };

    // Handle product detail navigation
    const handleProduct = (productid) => {
        navigate(`/ProductDetail/${productid}`);
    };

    // Handle page change
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="w-full">
            <div className="productsWrapper">
                {currentProducts.map(product => (
                    <div className="card text-black" key={product.id}>
                        <div onClick={() => handleProduct(product.id)}>
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="product-image"
                            />
                        </div>
                        <h4>{product.name}</h4>
                        <h5 className="text-bold text-black">Price: ${product.price}</h5>
                        <div className="btn-container text-black">
                            <button className="btn" onClick={() => handleCart(product)}>
                                Add to Cart
                            </button>
                            <button className="btn buy-btn ml-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default AllProduct;
