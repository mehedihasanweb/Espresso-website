// import React from 'react';
import footerImage from '../assets/images/more/24.jpg'

const MainFooter = () => {
    return (
        <div style={{backgroundImage: `url(${footerImage})`}} className='p-4'>
            <h2 className='text-center text-white text-2xl'>Copyright Espresso Emporium! All Right Reserved</h2>
        </div>
    );
};

export default MainFooter;