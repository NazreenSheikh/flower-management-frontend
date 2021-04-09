import React from "react";
import Slider from "./partials/Slider";
import ProductCard from "./home/ProductCard";
import CategoryCard from "./home/CategoryCard";

const Home = (props) => {
    return (
        <div>
            {/* <Slider /> */}
            <div className="container">
                <div>
                    <CategoryCard />
                </div>
                <div>
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
