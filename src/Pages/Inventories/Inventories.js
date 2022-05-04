import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventories.css'

const Inventories = () => {
    const { id } = useParams()
    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `https://floating-atoll-21243.herokuapp.com/inventories/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setItem(data)
            })
    }, [item])

    const restockHandler = (event) => {
        event.preventDefault()
        const restock = parseInt(event.target.restock.value) + item.qty
        const url = `https://floating-atoll-21243.herokuapp.com/inventories/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQty: restock })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.restock.value.reset()

            })


    }

    const deliveredbtnHandler = id => {

        if (item.qty > 0) {
            const quantity = item.qty - 1
            const url = `https://floating-atoll-21243.herokuapp.com/inventories/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQty: quantity })
            })
                .then(res => res.json())
                .then(data => console.log(data, 'updated'))
        }
        else {
            window.alert('Add item')
        }


    }
    const navigate = useNavigate()
    const manage = () => {
        console.log(id);
        navigate(`/manage`)
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-2 mb-5'>Update Your Inventory</h1>

            <div className='box-container'>
                <div className='image-container'>
                    <img src={item.img} alt="" />
                </div>
                <div className='item-container'>
                    <h3>{item.name}</h3>
                    <p className='description-text'>Details: {item.desc}</p>
                    <p className='price'>${item.price}</p>
                    <p>Supplier: {item.supplierName}</p>
                    <p className='fs-5'>Qty: {item.qty}</p>
                    <button className='delivered-btn' onClick={() => deliveredbtnHandler(id)}>Delivered</button>
                    <button className='manage-btn' onClick={manage}>View All Items</button>
                    <form onSubmit={restockHandler}>
                        <input className='restock-field' placeholder='Quantity' type="number" name='restock' />
                        <input className='restock-btn' type="submit" value="Restock" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inventories;