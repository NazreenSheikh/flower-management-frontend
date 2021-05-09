import React, { Fragment, useContext, useEffect, useState } from 'react'
import { LayoutContext } from '../layout'
import './style.css'

const ProductDetailsSectionTwo = (props) => {
    const { data: layoutData } = useContext(LayoutContext)
    const [singleProduct, setSingleproduct] = useState({})

    useEffect(() => {
        setSingleproduct(
            layoutData.singleProductDetail ? layoutData.singleProductDetail : ''
        )
    }, [])

    return (
        <Fragment>
            <div className="flex justify-center px-4 py-4 m-4 space-x-4 font-light tracking-widest text-gray-800 capitalize bg-white border-t border-b md:mx-8 md:my-6">
                <div>
                    <span>Category :</span>
                    <span className="text-sm text-gray-600">
                        {' '}
                        {singleProduct.pCategory ? singleProduct.pCategory : ''}
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetailsSectionTwo
