import React, { Fragment } from 'react'
import OrderSuccessMessage from './OrderSuccessMessage'

const Slider = (props) => {
    return (
        <Fragment>
            <div className="relative mt-16 bg-gray-100 border-2"></div>
            <OrderSuccessMessage />
        </Fragment>
    )
}

export default Slider
