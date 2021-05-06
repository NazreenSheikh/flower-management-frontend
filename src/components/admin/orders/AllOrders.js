import moment from 'moment'
import React, { Fragment, useContext, useEffect } from 'react'
import { deleteOrderReq, editOrderReq, fetchData } from './Actions'
import { OrderContext } from './index'

const apiURL = process.env.REACT_APP_API_URL

const AllCategory = (props) => {
    const { data, dispatch } = useContext(OrderContext)
    const { orders, loading } = data

    useEffect(() => {
        fetchData(dispatch)
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
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
            <div className="col-span-1 p-4 overflow-auto bg-white shadow-lg">
                <table className="w-full my-2 border table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Products</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Total</th>
                            <th className="px-4 py-2 border">Transaction Id</th>
                            <th className="px-4 py-2 border">Customer</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Phone</th>
                            <th className="px-4 py-2 border">Address</th>
                            <th className="px-4 py-2 border">Created at</th>
                            <th className="px-4 py-2 border">Updated at</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 ? (
                            orders.map((item, i) => {
                                return (
                                    <CategoryTable
                                        key={i}
                                        order={item}
                                        editOrder={(oId, type, status) =>
                                            editOrderReq(
                                                oId,
                                                type,
                                                status,
                                                dispatch
                                            )
                                        }
                                    />
                                )
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="12"
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
        </Fragment>
    )
}

/* Single Category Component */
const CategoryTable = ({ order, editOrder }) => {
    const { dispatch } = useContext(OrderContext)

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
                    {order.transactionId}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.user.name}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.user.email}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.phone}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {order.address}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {moment(order.createdAt).format('lll')}
                </td>
                <td className="p-2 text-center hover:bg-gray-200">
                    {moment(order.updatedAt).format('lll')}
                </td>
                <td className="flex items-center justify-center p-2">
                    <span
                        onClick={(e) =>
                            editOrder(order.order_id, true, order.status)
                        }
                        className="p-2 mx-1 rounded-lg cursor-pointer hover:bg-gray-200"
                    >
                        <svg
                            className="w-6 h-6 text-green-500 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span
                        onClick={(e) =>
                            deleteOrderReq(order.order_id, dispatch)
                        }
                        className="p-2 mx-1 rounded-lg cursor-pointer hover:bg-gray-200"
                    >
                        <svg
                            className="w-6 h-6 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </span>
                </td>
            </tr>
        </Fragment>
    )
}

export default AllCategory
