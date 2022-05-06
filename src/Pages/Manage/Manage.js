import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Manage.css'

const Manage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = 'https://floating-atoll-21243.herokuapp.com/inventories'
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const deleteHandler = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log(id);
            const url = `https://floating-atoll-21243.herokuapp.com/inventories/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
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
            <button onClick={addnewItemHandler}>Add New Item</button>
            {
                items.map(item =>
                    <div key={item._id}>
                        <div className='sth-container'>
                            <div className='product-picture-container'>
                                <img className='product-picture' src={item.img} alt="" />
                            </div>
                            <div className='product-info'>
                                <p className='fs-4'>{item.name}</p>
                                <p className='fs-5'>${item.price}</p>
                                <p>Stock: {item.qty}</p>
                            </div>
                            <div className='btn-container'>
                                <button className='delete-btn' onClick={() => deleteHandler(item._id)}>Delete</button>
                                
                            </div>
                        </div>

                    </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Manage;