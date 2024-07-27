import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/productjson.json");
      const jsondata = await response.json();
      setProduct(jsondata);
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    const filteredProducts = product.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilterProduct(filteredProducts);
  }, [input, product]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    navigate("/searchitem", { state: { filterProduct } });
    setInput(""); 
  }

  const handleProductSelect = (product) => {
    setInput(product.name); 
    navigate("/searchitem", { state: { filterProduct: [product] } }); 
  }

  return (
    <div className="relative flex justify-center ">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="text-gray-700" size={18} />
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
            placeholder="Search..."
          />
        </form>
        {input && (
          <div className="absolute mt-2 w-full border border-gray-200 rounded-lg bg-white z-10">
            {
              filterProduct.length > 0 ? (
                <ul>
                  {filterProduct.map((product) => (
                    <li
                      key={product.id}
                      className="p-2 hover:bg-gray-100 text-black cursor-pointer"
                      onClick={() => handleProductSelect(product)}
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-2 text-gray-500">No products found.</p>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
