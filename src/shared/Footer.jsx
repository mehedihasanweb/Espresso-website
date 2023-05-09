// import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import footerImage from '../assets/images/more/13.jpg'
import icon1 from '../assets/images/more/logo1.png'

const Footer = () => {
    return (
        <div className='mt-16' style={{ backgroundImage: `url(${footerImage})` }}>
            <div className='md:px-32 px-8 md:flex justify-around items-center p-6'>
                <div className='mb-12 w-full'>
                    <img src={icon1} className='w-20 h-20' alt="" />
                    <h2 className='py-4 text-4xl font-bold'>Espresso Emporium</h2>
                    <p className='text-xl text-gray-600 mb-3'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, tot share with your best companion.</p>
                    <div className='flex'>
                        <FaFacebook className='w-6 h-6'/>
                        <FaTwitter className='w-6 h-6 mx-6'/>
                        <FaInstagram className='w-6 h-6'/>
                        <FaLinkedin className='w-6 h-6 mx-6'/>
                    </div>
                    <h2 className='text-2xl font-bold my-3'>Get in Touch</h2>
                    <div className='flex items-center'>
                        <FaPhone />
                        <p className='mx-3'>+88 01533 333 333</p>
                    </div>
                    <div className='flex items-center'>
                        <FaEnvelope />
                        <p className='mx-3 py-3'>info@gmail.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaMapMarkedAlt />
                        <p className='mx-3 '>72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
                <div className='h-full'>
                    <h2 className='text-4xl font-bold'>Connect with Us</h2>
                    <input type="text" placeholder='Name' className='w-full p-2'/><br />
                    <input type="email" name="email" placeholder='Email' className='p-2 my-3 w-full'/><br />
                    <textarea name="message" cols="40" rows="3" className='w-full p-2' placeholder='Message'></textarea>
                    <input type="submit" value="Send Message" className='p-2 rounded-2xl mt-2' style={{border: '2px solid #331A15'}}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;