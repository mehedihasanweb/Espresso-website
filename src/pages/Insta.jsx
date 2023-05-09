// import React from 'react';
import cup1 from '../assets/images/cups/cup1.png'
import cup2 from '../assets/images/cups/cup2.png'
import cup3 from '../assets/images/cups/cup3.png'
import cup4 from '../assets/images/cups/cup4.png'
import cup5 from '../assets/images/cups/cup5.png'
import cup6 from '../assets/images/cups/cup6.png'
import cup7 from '../assets/images/cups/cup7.png'
import cup8 from '../assets/images/cups/cup8.png'

const Insta = () => {
    return (
        <div className="mt-16 md:px-32">
            <p className="text-2xl text-center">Follow Us Now</p>
            <h2 className="text-5xl text-center">Follow on Instagram</h2>
            <div className='grid md:grid-cols-4 mt-12 justify-items-center mx-auto gap-4'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default Insta;