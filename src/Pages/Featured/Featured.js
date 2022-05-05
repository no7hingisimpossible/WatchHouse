import React from 'react';
import './Featured.css'

const Featured = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-3'>Featured</h1>
            <div className='feature-container'>
                <div className="featured-bg-container">
                    <div className='featured-bg'>
                        <div className='featured-text'>
                            <p className='fs-4'>Mens Watches</p>
                            <p>Omega Watches</p>
                            <p>Omega Watches</p>
                            <p>Omega Watches</p>
                        </div>
                    </div>
                </div>
                <div className="featured-bg-container">
                    <div className='featured-bg2'>
                        <div className='featured-text2'>
                            <p className='fs-4'>Ladies Watches</p>
                            <p>Omega Watches</p>
                            <p>Omega Watches</p>
                            <p>Omega Watches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;