import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const addItem = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const desc = e.target.desc.value
        const price = e.target.price.value
        const supplier = e.target.supplier.value
        const qty = e.target.qty.value
        
        const order = {
            name : name,
            img : photo,
            email: email, 
            desc : desc, 
            price : price, 
            supplierName : supplier, 
            qty : qty
        }

        fetch('https://floating-atoll-21243.herokuapp.com/inventories', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
            toast.success('Product Added', { id: 'addItems' })
            navigate('/myItems')
    }
    return (
        <div>
            <h1 className='text-center'>Add new Item</h1>
            <form className='form' onSubmit={addItem}>
            <input type="text" name="name" id="1" placeholder='Watch Name' />
                <input type="email" name="email" id="6" placeholder='Your Email' />
                <input type="text" name="photo" id="7" placeholder='photoUrl' />
                <input type="text" name="desc" id="2" placeholder='Description' />
                <input type="number" name="price" id="3" placeholder='Price' />
                <input type="text" name="supplier" id="4" placeholder='Supplier Name' />
                <input type="number" name="qty" id="5" placeholder='Quantity' />
                <input className='submit-btn' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;