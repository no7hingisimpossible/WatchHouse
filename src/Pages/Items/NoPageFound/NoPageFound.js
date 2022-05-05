import React from 'react';
import './NoPageFound.css'

const NoPageFound = () => {
    return (
        <div className='container'>
            <div className=' text-center mx-auto w-25'>
                <h1 className='error-msg mx-auto'>404</h1>
                <h3>Not Found</h3>
                <p>The resource requested could not be found on the server</p>
            </div>
        </div>
    );
};

export default NoPageFound;