import React from 'react';
import './Item.css'


const Item = (props) => {
    const { img, name, price, qty, _id } = props.item
    const { updateHandler } = props


    return (
        <div className='col-sm-12 col-lg-4 g-5'>
            
            <div className='card-container'>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
                <div className='info-container'>
                    <p className='m-0'>{name}</p>
                    <p className='cost fs-5'>${price}</p>
                    <p className=''>Stock: {qty} pcs</p>
                    <p className='new'>New</p>
                </div>
                <button className='update-btn' onClick={() => updateHandler(_id)}>Update</button>
            </div>

        </div>
    );
};

export default Item;