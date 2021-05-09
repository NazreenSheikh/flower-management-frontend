import React, { createContext, Fragment, useReducer } from 'react'
import AdminLayout from '../layout'
import AllOrders from './AllOrders'
import { orderReducer, orderState } from './OrderContext'

/* This context manage all of the orders component's data */
export const OrderContext = createContext()

const OrderComponent = () => {
    return (
        <div className="grid grid-cols-1 p-4 space-y-4">
            <AllOrders />
        </div>
    )
}

const Orders = (props) => {
    const [data, dispatch] = useReducer(orderReducer, orderState)
    return (
        <Fragment>
            <OrderContext.Provider value={{ data, dispatch }}>
                <AdminLayout children={<OrderComponent />} />
            </OrderContext.Provider>
        </Fragment>
    )
}

export default Orders
