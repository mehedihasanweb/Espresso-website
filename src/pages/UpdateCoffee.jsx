// import React from 'react';

import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer";
import MainFooter from "../shared/MainFooter";
import Header from "../shared/Header";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const loadedData = useLoaderData()
    const { category, details, name, photo, quantity, supplier, taste, _id } = loadedData
    // console.log(loadedData);

    const handleUpdate = (event) =>{
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee);

        fetch(`http://localhost:5000/addCoffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div>
            <Header />
            <div>
                <div className=" bg-[#F4F3F0] md:p-24 p-6">
                    <Link to='/'><button className="mb-20 flex items-center"><FaArrowLeft />Back to Home </button></Link>
                    <h2 className="text-5xl text-center font-bold">Update Existing Coffee Details</h2>
                    <p className="text-gray-400 text-center my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsun is that it has a more-or-less normal distribution of letter as opposed <br /> to using content here.</p>
                    <form className="md:mx-48" onSubmit={handleUpdate}>
                        {/* form coffee name and quantity row */}
                        <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-6">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form supplier and Taste row */}
                        <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Supplier Name</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-6">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-6">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Photo url row */}
                        <div className="mb-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update Coffee" className="bg-[#D2B48C] border-none btn btn-block" />
                    </form>
                </div>
            </div>
            <Footer />
            <MainFooter />
        </div>
    );
};

export default UpdateCoffee;