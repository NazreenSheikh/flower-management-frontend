import React, { Fragment, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { logout } from './Action'
import { DashboardUserContext } from './Layout'

const Sidebar = (props) => {
    const { data } = useContext(DashboardUserContext)

    const history = useHistory()
    const location = useLocation()

    return (
        <Fragment>
            <div className="flex flex-col w-full space-y-4 font-medium md:w-3/12">
                <div
                    style={{ background: '#303031' }}
                    className="flex items-center p-2 space-x-2 text-gray-100 rounded shadow"
                >
                    <svg
                        className="w-16 h-16 text-gray-100 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <div className="flex flex-col w-full">
                        <span className="text-sm">Hello,</span>
                        <span className="text-lg">
                            {data.userDetails ? data.userDetails.name : ''}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col hidden w-full shadow md:block">
                    <div
                        onClick={(e) => history.push('/user/orders')}
                        className={`${
                            location.pathname === '/user/orders'
                                ? 'border-r-4 border-yellow-700 bg-gray-200'
                                : ''
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                    >
                        My Orders
                    </div>
                    <hr />
                    <div
                        onClick={(e) => history.push('/user/profile')}
                        className={`${
                            location.pathname === '/user/profile'
                                ? 'border-r-4 border-yellow-700 bg-gray-200'
                                : ''
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                    >
                        My Accounts
                    </div>
                    <hr />
                    <div
                        onClick={(e) => history.push('/wish-list')}
                        className={` px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                    >
                        My Wishlist
                    </div>
                    <hr />
                    <div
                        onClick={(e) => history.push('/user/setting')}
                        className={`${
                            location.pathname === '/user/setting'
                                ? 'border-r-4 border-yellow-700 bg-gray-200'
                                : ''
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                    >
                        Change Password
                    </div>
                    <hr />
                    <div
                        onClick={(e) => logout()}
                        className={`${
                            location.pathname === '/admin/dashboard/categories'
                                ? 'border-r-4 border-yellow-700 bg-gray-200'
                                : ''
                        }  px-4 py-4 hover:bg-gray-200 cursor-pointer`}
                    >
                        Logout
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar
