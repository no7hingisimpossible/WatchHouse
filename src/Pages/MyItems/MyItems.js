import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://floating-atoll-21243.herokuapp.com/inventory?email=${email}`
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
        if (proceed) {

            const url = `https://floating-atoll-21243.herokuapp.com/inventory/${id}`
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
            <h3 className='text-center mb-5'>My Items</h3>
            {
                items.map(item =>
                    <div key={item._id} className>
                        <div className="boxx-container">
                            <div className="image-container">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="item-container">
                                <h3>{item.name}</h3>
                                <p className='description-text'>Details: {item.desc}</p>
                                <p className='price'>${item.price}</p>
                                <p>Supplier: {item.supplierName}</p>
                                <p className='fs-5'>Qty: {item.qty}</p>
                                <p>{user.email}</p>
                                <button className='delivered-btn' onClick={() => deleteHandler(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)

            }
        </div>
    );
};

export default MyItems;