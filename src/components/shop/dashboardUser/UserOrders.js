import moment from 'moment'
import React, { Fragment, useContext, useEffect } from 'react'
import { fetchOrderByUser } from './Action'
import Layout, { DashboardUserContext } from './Layout'

const apiURL = process.env.REACT_APP_API_URL

const TableHeader = () => {
    return (
        <Fragment>
            <thead>
                <tr>
                    <th className="px-4 py-2 border">Products</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Total</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className="px-4 py-2 border">Address</th>
                    <th className="px-4 py-2 border">Transaction Id</th>
                    <th className="px-4 py-2 border">Checkout</th>
                    <th className="px-4 py-2 border">Processing</th>
                </tr>
            </thead>
        </Fragment>
    )
}

const TableBody = ({ order }) => {
    return (
        <Fragment>
            <tr className="border-b">
                <td className="flex flex-col w-48 p-2 space-y-1 hover:bg-gray-200">
                    {order.allProduct.map((product, i) => {
                        return (
                            <span
                                className="flex items-center space-x-2"
                                key={i}
                            >
                                <img
                                    className="object-cover object-center w-8 h-8"
                                    src={`${apiURL}/uploads/products/${product.id.pImage}`}
                                    alt="productImage"
                                />
                                <span>{product.id.pName}</span>
                                <span>{product.quantitiy}x</span>
                            </span>
                        )
                    })}
                </td>
                <td className="p-2 text-center cursor-default hover:bg-gray-200">
                    {order.status === 'Not processed' && (
                        <span className="block px-2 text-xs font-semibold text-center text-red-600 rounded-full">
                            {order.status}
                        </span>
                    )}
                    {order.status === 'Processing' && (
                        <span className="block px-2 text-xs font-semibold text-center text-yellow-600 rounded-full">
                            {order.status}
                        </span>
                    )}
                    {order.status === 'Shipped' && (
                        <span className="block px-2 text-xs font-semibold text-center text-blue-600 rounded-full">
                            {order.status}
                        </span>
                    )}
                    {order.status === 'Delivered' && (
                        <span className="block px-2 text-xs font-semibold text-center text-green-600 rounded-full">
                            {order.status}
                        </span>
                    )}
                    {order.status === 'Cancelled' && (
                        <span className="block px-2 text-xs font-semibold text-center text-red-600 rounded-full">
                            {order.status}
                        </span>
                    )}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    ${order.amount}.00
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.phone}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.address}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.transactionId}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {moment(order.createdAt).format('lll')}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {moment(order.updatedAt).format('lll')}
                </td>
            </tr>
        </Fragment>
    )
}

const OrdersComponent = () => {
    const { data, dispatch } = useContext(DashboardUserContext)
    const { OrderByUser: orders } = data

    useEffect(() => {
        fetchOrderByUser(dispatch)
    }, [])

    if (data.loading) {
        return (
            <div className="flex items-center justify-center w-full py-24 md:w-9/12">
                <svg
                    className="w-12 h-12 text-gray-600 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                </svg>
            </div>
        )
    }
    return (
        <Fragment>
            <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="border">
                    <div className="px-4 py-4 text-lg font-semibold border-t-2 border-yellow-700">
                        Orders
                    </div>
                    <hr />
                    <div className="p-4 overflow-auto bg-white shadow-lg">
                        <table className="w-full my-2 border table-auto">
                            <TableHeader />
                            <tbody>
                                {orders && orders.length > 0 ? (
                                    orders.map((item, i) => {
                                        return (
                                            <TableBody key={i} order={item} />
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="8"
                                            className="py-8 text-xl font-semibold text-center"
                                        >
                                            No order found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="mt-2 text-sm text-gray-600">
                            Total {orders && orders.length} order found
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const UserOrders = (props) => {
    return (
        <Fragment>
            <Layout children={<OrdersComponent />} />
        </Fragment>
    )
}

export default UserOrders
