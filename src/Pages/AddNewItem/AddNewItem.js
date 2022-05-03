import React from 'react';

const AddNewItem = () => {
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

        fetch('http://localhost:5000/inventories', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }
    return (
        <div>
            <h1 className='text-center'>Add new Item</h1>
            <form onSubmit={addItem}>
            <input type="text" name="name" id="1" placeholder='Product Name' />
                <input type="email" name="email" id="6" placeholder='Your Email' />
                <input type="text" name="photo" id="7" placeholder='photoUrl' />
                <input type="text" name="desc" id="2" placeholder='Description' />
                <input type="number" name="price" id="3" placeholder='Price' />
                <input type="text" name="supplier" id="4" placeholder='Supplier Name' />
                <input type="number" name="qty" id="5" placeholder='Quantity' />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;