// import React from 'react';
import './Home.css'
import cup from '../assets/icons/cup.png'
import quality from '../assets/icons/2.png'
import grades from '../assets/icons/3.png'
import roasting from '../assets/icons/4.png'
import Product from '../components/products/Product'
import Insta from './Insta'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CoffeeCard from '../components/coffeeCard/CoffeeCard'
import Footer from '../shared/Footer'
import { useEffect, useState } from 'react'
import MainFooter from '../shared/MainFooter'

const Home = () => {
    const loadedCoffeeData = useLoaderData()
    // console.log(loadedCoffeeData);
    const [coffees, setCoffees] = useState([])
    // console.log(loadedCoffeeData);
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('https://espresso-server-site-mehedihasanweb.vercel.app/addCoffee')
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setCoffees(data)
            }
            else{
                navigate('/')
            }
        })
    },[navigate])

    return (
        <>
            <div className="banner flex items-center">
                <div className='md:ml-20 p-6'>
                    <h2 className='text-4xl text-white mb-4'>Would you like a Cup of Delicious Coffee? </h2>
                    <p className='text-white mb-10'>It's coffee time - Sip & Savor -Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] py-2 px-6'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3] p-12'>
                <div className='md:flex w-2/3 mx-auto md:gap-12'>
                    <div className='mb-6'>
                        <img src={cup} alt="" />
                        <h3>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div className='mb-6'>
                        <img src={quality} alt="" />
                        <h3>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div className='mb-6'>
                        <img src={grades} alt="" />
                        <h3>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div className='mb-6'>
                        <img src={roasting} alt="" />
                        <h3>Awesome Aroma</h3>
                        <p >You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                </div>
            </div>
            <Product />
            <div className='md:px-32 px-8 grid md:grid-cols-2'>
                {
                    coffees.map(singleCoffee => <CoffeeCard key={singleCoffee._id}
                    singleCoffee={singleCoffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
            <Insta />
            <Footer />
            <MainFooter />
        </>
    );
};

export default Home;