import React from 'react';
import Navbar from './home/Navbar';
import ProductCard from './home/ProductCard';

const Main = (props) => {
    return (
        <div>
            <Navbar />
            <div>
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default Main;