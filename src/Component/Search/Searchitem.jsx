import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Searchitem = () => {
    const location = useLocation();
    const { filterProduct } = location.state || {};
    const navigate = useNavigate();

    return (
        <div className=' '>
            <div className="flex">
                <div className="productsWrapper">
                    {filterProduct.map(product => (
                        <div className="card" key={product.id} >
                            <div onClick={(e) => navigate(`/ProductDetail/${product.id}`)}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "15px"
                                    }}
                                />
                                <h4 className=' text-black'>{product.name}</h4>
                                <h5 className=' text-bold  text-black'>Price: ${product.price}</h5>
                            </div>
                            <div className="btn-container">
                                <button className="btn" onClick={() => handlecart(product)} >
                                    Add to Cart
                                </button>
                                <button className="btn buy-btn ml-4" >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Searchitem;
