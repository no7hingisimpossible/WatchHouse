import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5 bg-black'>
            <div className="footer-container">
                <div className=' w-75 mx-auto p-2'>
                    <h5>Subscribe Us</h5>
                    <p>Sign up to our newsletter to get the latest watches and offers</p>
                    <input className='w-75' type="email" name="" id="" placeholder='Your Email'/>
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
                <div className='text-center w-75 mx-auto p-2'>
                    <h5>Social</h5>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className=' text-center w-75 mx-auto p-2 px-3'>
                    <h5>Opening Hours</h5>
                    <div className='d-flex justify-content-between'>
                        <p>Sunday</p>
                        <p>09:00-17:00</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Monday</p>
                        <p>09:00-17:00</p>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p>Tuesday</p>
                        <p>09:00-17:00</p>
                    </div>

                    
                </div>
            </div>
                <p className='text-center  text-white mt-4'><small>Copyright&copy; 2022 WatchHouse. All right reseved</small></p>
            

        </div>
    );
};

export default Footer;