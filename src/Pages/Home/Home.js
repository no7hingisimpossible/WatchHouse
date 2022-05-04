import React from 'react';
import AllBrands from '../AllBrands/AllBrands';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <AllBrands></AllBrands>
            <Footer></Footer>
        </div>
    );
};

export default Home;