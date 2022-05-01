import React from 'react';
import img1 from '../../images/breakfast1.png'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-25" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block  w-25" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-25" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;