// import React from 'react';

import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ singleCoffee, coffees, setCoffees }) => {
    // console.log(singleCoffee);
    const { details, name, photo, quantity, _id } = singleCoffee

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addCoffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }
                    })
            }
        })

    }

    return (
        <div className="mb-6">
            <div className="card h-full md:ml-6 md:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="md:flex w-full justify-around items-center">
                    <div className="text-center">
                        <h2 className="mb-3"> Coffee Name: {name}</h2>
                        <p className="mb-3">Details: {details}</p>
                        <p className="mb-3">Quantity: {quantity}</p>
                    </div>
                    <div className="p-4 gap-2 btn-group md:btn-group-vertical md:mx-0 mx-16">
                        <Link to={`/singlePage/${_id}`}>
                            <button className="btn bg-[#D2B48C] border-none"><FaEye /></button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn bg-[#3C393B] border-none"><FaEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] border-none"><FaRegTrashAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;