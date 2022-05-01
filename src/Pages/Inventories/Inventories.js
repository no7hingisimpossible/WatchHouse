import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventories = () => {
    const {id} = useParams()
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/inventories/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            setItem(data)
        })
    },[item])

    const restockHandler = (event) =>{
        event.preventDefault()
        const restock = parseInt(event.target.restock.value) + item.qty
        const url = `http://localhost:5000/inventories/${id}`
        
        fetch(url, {
            method : 'PUT', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQty: restock})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'updated')
            
        })

        
    }

    const deliveredbtnHandler = id => {
        const quantity = item.qty - 1 
        const url = `http://localhost:5000/inventories/${id}`
        fetch(url, {
            method : 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({newQty: quantity})
        })
        .then(res => res.json())
        .then(data => console.log(data ,'updated'))
    }
    const navigate = useNavigate()
    const manage = () =>{
        console.log(id);
        navigate(`/manage`)
    }

    return (
        <div>
            THIS IS INVENTORIES {id}
            <p>Name: {item.name}</p>
            <p>Desc: {item.desc}</p>
            <p>Price: {item.price}</p>
            <p>Supplier: {item.supplierName}</p>
            <p>Qty: {item.qty}</p>
            <button onClick={()=>deliveredbtnHandler(id)}>Delivered</button>
            <form onSubmit={restockHandler}>
                <input type="number" name='restock' />
                <input type="submit" value="Restock" />
            </form>
            <button onClick={manage}>Manage</button>
        </div>
    );
};

export default Inventories;