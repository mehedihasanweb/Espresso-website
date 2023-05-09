// import React from 'react';
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = () => {

    return (
        <div className="text-center mt-16">
            <p className="text-2xl">--- Sip & Savor ---</p>
            <h2 className="text-5xl">Out Popular Products</h2>
            <Link to='/addCoffee' >
                <button className=' mt-5 mb-6 text-xl text-white bg-[#E3B577] py-2 px-6 flex mx-auto items-center'><span className="p-2">Add Coffee</span> <FaCoffee className="ml-2" /></button>
            </Link>
        </div>
    );
};

export default Product;