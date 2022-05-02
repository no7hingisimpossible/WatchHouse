import React from 'react';
import './Item.css'


const Item = (props) => {
    const { img, name, price, qty, _id } = props.item
    const { updateHandler } = props


    return (
        <div className='col-4 g-3'>
            <div className='card-container'>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
                <p>{name}</p>
                <p>${price}</p>
                <p>Stock : {qty}</p>
            <button className='update-btn' onClick={() => updateHandler(_id)}>Update</button>
            </div>

        </div>
    );
};

export default Item;