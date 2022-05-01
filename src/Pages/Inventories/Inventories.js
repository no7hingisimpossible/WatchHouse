import React from 'react';
import { useParams } from 'react-router-dom';

const Inventories = () => {
    const {id} = useParams()
    return (
        <div>
            THIS IS INVENTORIES {id}
        </div>
    );
};

export default Inventories;