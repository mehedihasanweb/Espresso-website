// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { FaArrowLeft } from "react-icons/fa";

const SingleItem = () => {

    const singleData = useLoaderData()
    // console.log(singleData);
    const { category, details, name, photo, quantity, supplier, taste } = singleData
    return (
        <div>
            <Header />

            <div className="md:mx-60 ">
                <Link to='/'>
                    <button className="py-12 flex items-center"> <FaArrowLeft /> Back to Home</button>
                </Link>
                <div className="bg-[#F4F3F0] card card-side shadow-xl md:w-[50%] flex mx-auto">
                    <figure><img src={photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p><span className="text-bold">Name: </span>{name}</p>
                        <p><span className="text-bold">Quantity: </span>{quantity}</p>
                        <p><span className="text-bold">Supplier: </span>{supplier}</p>
                        <p><span className="text-bold">Taste: </span>{taste}</p>
                        <p><span className="text-bold">Details: </span>{details}</p>
                        <p><span className="text-bold">Category: </span>{category}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SingleItem;