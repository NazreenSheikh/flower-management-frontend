import moment from 'moment'
import React, { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { DashboardContext } from './'
import { todayAllOrders } from './Action'

const apiURL = process.env.REACT_APP_API_URL

const SellTable = () => {
    const history = useHistory()
    const { data, dispatch } = useContext(DashboardContext)

    useEffect(() => {
        todayAllOrders(dispatch)
    }, [])

    const ordersList = () => {
        let newList = []
        if (data.totalOrders.Orders !== undefined) {
            data.totalOrders.Orders.forEach(function (elem) {
                if (
                    moment(elem.createdAt).format('LL') ===
                    moment().format('LL')
                ) {
                    newList = [...newList, elem]
                }
            })
        }
        return newList
    }

    return (
        <Fragment>
            <div className="col-span-1 p-4 overflow-auto bg-white shadow-lg">
                <div className="mb-6 text-2xl font-semibold text-center">
                    Today's Orders{' '}
                    {data.totalOrders.Orders !== undefined
                        ? ordersList().length
                        : 0}
                </div>
                <table className="w-full my-2 border table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Products</th>
                            <th className="px-4 py-2 border">Image</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Order Address</th>
                            <th className="px-4 py-2 border">Ordered at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.totalOrders.Orders !== undefined ? (
                            ordersList().map((item, key) => {
                                return (
                                    <TodayOrderTable order={item} key={key} />
                                )
                            })
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="py-8 text-xl font-semibold text-center"
                                >
                                    No orders found today
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="mt-2 text-sm text-gray-600">
                    Total{' '}
                    {data.totalOrders.Orders !== undefined
                        ? ordersList().length
                        : 0}{' '}
                    orders found
                </div>
                <div className="flex justify-center">
                    <span
                        onClick={(e) => history.push('/admin/dashboard/orders')}
                        style={{ background: '#303031' }}
                        className="px-4 py-2 text-white rounded-full cursor-pointer"
                    >
                        View All
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

const TodayOrderTable = ({ order }) => {
    return (
        <Fragment>
            <tr>
                <td className="flex flex-col w-48 p-2 space-y-1 hover:bg-gray-200">
                    {order.allProduct.map((item, index) => {
                        return (
                            <div key={index} className="flex space-x-2">
                                <span>{item.id.pName}</span>
                                <span>{item.quantitiy}x</span>
                            </div>
                        )
                    })}
                </td>
                <td className="p-2 text-left">
                    {order.allProduct.map((item, index) => {
                        return (
                            <img
                                key={index}
                                className="object-cover w-12 h-12"
                                src={`${apiURL}/uploads/products/${item.product_id.pImage}`}
                                alt="Pic"
                            />
                        )
                    })}
                </td>
                <td className="p-2 text-center">
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
                <td className="p-2 text-center">{order.address}</td>
                <td className="p-2 text-center">
                    {moment(order.createdAt).format('lll')}
                </td>
            </tr>
        </Fragment>
    )
}

const TodaySell = (props) => {
    return (
        <div className="m-4">
            <SellTable />
        </div>
    )
}

export default TodaySell
