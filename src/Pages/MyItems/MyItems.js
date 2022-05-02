import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/inventory?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [])
    const deleteHandler = id => {
        console.log(id);
        const proceed = window.confirm("Are you sure you want to delete?")
        if(proceed){

            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id)
                setItems(remaining)
            })
        }
    }
    return (
        <div>
            {
                items.map(item => 
                <div key={item._id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item._id}</p>
                    <button onClick={()=>deleteHandler(item._id)}>Delete</button>
                </div>)
                
            }
        </div>
    );
};

export default MyItems;