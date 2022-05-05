import React from 'react';
import './AllBrands.css'
import cardimg1 from '../../images/cardimg1.jpg'
import cardimg2 from '../../images/cardimg2.jpg'
import cardimg3 from '../../images/cardimg3.jpg'
import cardimg4 from '../../images/cardimg4.jpg'

const AllBrands = () => {
    return (
        <div className='container mt-5'>
            <h1>New Suppliers</h1>
            <div>
                <div className='allbrand-img'>
                    <div className='text-infos'>
                        <h2 className='text-center'>Micheal Korrs</h2>
                        <div className='d-flex justify-content-between text-container'>
                            <ul>
                                <li>Runway</li>
                                <li>Parker</li>
                                <li>Darci</li>
                            </ul>
                            <ul>
                                <li>Lexington</li>
                                <li>Bradshaw</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='allcard-container mt-2'>
                <div className='cardd-container'>
                    <div className='cardd-container-img'>
                        <img src={cardimg1} alt="" />
                    </div>
                    <div className='brands'>
                        <h4>Japanese Watches</h4>
                        <p>Seiko</p>
                        <p>Grand Seiko</p>
                        <p>Casio</p>
                        <p>Citizen</p>
                    </div>
                </div>
                <div className='cardd-container'>
                    <div className='cardd-container-img'>
                        <img src={cardimg2} alt="" />
                    </div>
                    <div className='brands2'>
                        <h4>German Watches</h4>
                        <p>Sinn Watches</p>
                        <p>Nomos Watches</p>
                        <p>Muhle Watches</p>
                        <p>Tutima Watches</p>
                    </div>
                </div>
                <div className='cardd-container'>
                    <div className='cardd-container-img'>
                        <img src={cardimg3} alt="" />
                    </div>
                    <div className='brands3'>
                        <h4 >Swiss Watches</h4>
                        <p>Rolex Watches</p>
                        <p>Hublot Watches</p>
                        <p>Omega Watches</p>
                        <p>Tag Heuer Watches</p>
                    </div>
                </div>
                <div className='cardd-container'>
                    <div className='cardd-container-img'>
                        <img src={cardimg4} alt="" />
                    </div>
                    <div className='brands4'>
                        <h4>Smart Watches</h4>
                        <p>Suntu Watches</p>
                        <p>Apple Watches</p>
                        <p>Huawei Watches</p>
                        <p>Oppo Watches</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllBrands;