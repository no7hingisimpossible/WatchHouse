import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';


const Items = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://floating-atoll-21243.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const updateHandler = (id) => {
        console.log(id);
        navigate(`/inventories/${id}`)
    }
    const viewall = () => {
        navigate('/manage')
    }

    return (
        <div className='container mx-auto row'>
            <h1 className='mt-5 text-center'>Inventory</h1>

            {
                items.slice(0, 6).map(item =>
                    <Item key={item._id} item={item} updateHandler={updateHandler}>

                    </Item>)
            }
            <button onClick={viewall} className='w-0 mt-2 ms-auto btn btn-link'>View All</button>
            
        </div>
    );
};

export default Items;