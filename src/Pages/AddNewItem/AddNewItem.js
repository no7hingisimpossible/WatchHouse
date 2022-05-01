import React from 'react';

const AddNewItem = () => {
    return (
        <div>
            <h1 className='text-center'>Add new Item</h1>
            <form action="">
            <input type="text" name="name" id="1" placeholder='Product Name' />
                <input type="email" name="email" id="6" placeholder='Product Name' />
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