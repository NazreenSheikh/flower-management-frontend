import React, { createContext, Fragment, useReducer } from 'react'
import Layout from '../layout'
import { homeReducer, homeState } from './HomeContext'
import ProductCategory from './ProductCategory'
import SingleProduct from './SingleProduct'
import Slider from './Slider'

export const HomeContext = createContext()

const HomeComponent = () => {
    return (
        <Fragment>
            <Slider />
            {/* Category, Search & Filter Section */}
            <section className="m-4 md:mx-8 md:my-6">
                <ProductCategory />
            </section>
            {/* Product Section */}
            <section className="grid grid-cols-2 m-4 md:mx-8 md:my-6 md:grid-cols-3 lg:grid-cols-4">
                <SingleProduct />
            </section>
        </Fragment>
    )
}

const Home = (props) => {
    const [data, dispatch] = useReducer(homeReducer, homeState)
    return (
        <Fragment>
            <HomeContext.Provider value={{ data, dispatch }}>
                <Layout children={<HomeComponent />} />
            </HomeContext.Provider>
        </Fragment>
    )
}

export default Home
