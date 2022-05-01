import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Manage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/inventories'
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const deleteHandler = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
       if(proceed){
        console.log(id);
        const url = `http://localhost:5000/inventories/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = items.filter(item => item._id !== id )
            setItems(remaining);
        })
       }
    }
    const navigate = useNavigate()
    const addnewItemHandler = () => {
        navigate('/addInventory')
    }
    return (
        <div>
             {
                items.map(item =>
                    <div key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.qty}</p>
                        <button onClick={addnewItemHandler}>Add New Item</button>
                        <button onClick={() => deleteHandler(item._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default Manage;