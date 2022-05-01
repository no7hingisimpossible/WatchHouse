import React from 'react';


const Item = (props) => {
    const {name, price, qty, _id} = props.item
    const {updateHandler} = props
    
    
    return (
        <div>
            <p>Name : {name}</p>
            <p>Prie : {price}</p>
            <p>Qty : {qty}</p>
            <button onClick={()=>updateHandler(_id)}>Update</button>
            
        </div>
    );
};

export default Item;