import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Items = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventories')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    const navigate = useNavigate()
    const updateHandler = (id) =>{
        console.log(id);
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='container'>
            {
                items.slice(0,6).map(item => 
                    <div className='mb-2 p-2' style={{border:'1px solid red'}} key={item._id}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>{item.desc}</p>
                        <p>{item.quantity}</p>
                        <p>{item.supplierName}</p>
                        <button onClick={()=>updateHandler(item._id)} className='btn btn-primary'>Update</button>

                    </div>)
            }
        </div>
    );
};

export default Items;