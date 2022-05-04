import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';


const Items = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://floating-atoll-21243.herokuapp.com/inventories')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    
    const updateHandler = (id) =>{
        console.log(id);
        navigate(`/inventories/${id}`)
    }
    
    return (
        <div className='container mx-auto row'>
            {/* {
                items.slice(0,6).map(item => 
                    <div className='mb-2 p-2' style={{border:'1px solid red'}} key={item._id}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>{item.desc}</p>
                        <p>{item.quantity}</p>
                        <p>{item.supplierName}</p>
                        <button onClick={()=>updateHandler(item._id)} className='btn btn-primary'>Update</button>

                    </div>)
            } */}

            {
                items.slice(0,6).map(item => 
                <Item key={item._id}  item={item} updateHandler={updateHandler}>

                </Item>)
            }
            
        </div>
    );
};

export default Items;