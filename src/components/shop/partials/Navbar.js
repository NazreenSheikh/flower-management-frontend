import React, { Fragment, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { isAdmin } from '../auth/fetchApi'
import { LayoutContext } from '../index'
import { logout } from './Action'
import './style.css'

const Navbar = (props) => {
    const history = useHistory()
    const location = useLocation()

    const { data, dispatch } = useContext(LayoutContext)

    const loginModalOpen = () =>
        data.loginSignupModal
            ? dispatch({ type: 'loginSignupModalToggle', payload: false })
            : dispatch({ type: 'loginSignupModalToggle', payload: true })

    const cartModalOpen = () =>
        data.cartModal
            ? dispatch({ type: 'cartModalToggle', payload: false })
            : dispatch({ type: 'cartModalToggle', payload: true })

    return (
        <Fragment>
            {/* Navbar Section */}
            <nav className="fixed top-0 z-10 w-full bg-white shadow-lg lg:shadow-none ">
                <div className="grid grid-cols-5 m-4 md:mx-12 md:my-6 lg:grid-cols-3">
                    <div className="flex col-span-1 mt-1 text-gray-600 lg:block">
                        <span
                            className="px-4 py-3 font-light tracking-widest rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-800"
                            onClick={(e) => history.push('/')}
                        >
                            Shop
                        </span>
                    </div>
                    <div className="flex items-center col-span-2 lg:hidden justify-items-stretch">
                        <span
                            onClick={(e) => history.push('/')}
                            style={{ letterSpacing: '0.10rem' }}
                            className="flex px-2 text-2xl font-bold text-center text-gray-800 uppercase cursor-pointer items-left"
                        >
                            Blooms Bay
                        </span>
                    </div>
                    <div
                        onClick={(e) => history.push('/')}
                        style={{ letterSpacing: '0.70rem' }}
                        className="flex hidden col-span-1 text-2xl font-bold tracking-widest text-center text-gray-800 uppercase cursor-pointer lg:block items-left"
                    >
                        BloomsBay
                    </div>
                    <div className="flex justify-end col-span-2 items-right lg:col-span-1">
                        {/*  WishList Page Button */}
                        <div
                            onClick={(e) => history.push('/wish-list')}
                            className="px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                            title="Wishlist"
                        >
                            <svg
                                className={`${
                                    location.pathname === '/wish-list'
                                        ? 'fill-current text-gray-800'
                                        : ''
                                } w-8 h-8 text-gray-600 cursor-pointer`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        {localStorage.getItem('jwt') ? (
                            <Fragment>
                                <div
                                    className="relative px-2 py-2 rounded-lg userDropdownBtn hover:bg-gray-200"
                                    title="Logout"
                                >
                                    <svg
                                        className="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800"
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
                                    <div className="absolute right-0 mt-1 bg-gray-200 rounded userDropdown">
                                        {!isAdmin() ? (
                                            <Fragment>
                                                <li className="flex flex-col w-48 text-gray-700 shadow-lg">
                                                    <span
                                                        onClick={(e) =>
                                                            history.push(
                                                                '/user/orders'
                                                            )
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>My Orders</span>
                                                    </span>
                                                    <span
                                                        onClick={(e) =>
                                                            history.push(
                                                                '/user/profile'
                                                            )
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>My Account</span>
                                                    </span>
                                                    <span
                                                        onClick={(e) =>
                                                            history.push(
                                                                '/wish-list'
                                                            )
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>My Wishlist</span>
                                                    </span>
                                                    <span
                                                        onClick={(e) =>
                                                            history.push(
                                                                '/user/setting'
                                                            )
                                                        }
                                                        className="flex px-8 py-2 space-x-1 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Change Password
                                                        </span>
                                                    </span>
                                                    <span
                                                        onClick={(e) =>
                                                            logout()
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Logout</span>
                                                    </span>
                                                </li>
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <li className="flex flex-col w-48 text-gray-700 shadow-lg">
                                                    <span
                                                        onClick={(e) =>
                                                            history.push(
                                                                '/admin/dashboard'
                                                            )
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Admin Panel</span>
                                                    </span>
                                                    <span
                                                        onClick={(e) =>
                                                            logout()
                                                        }
                                                        className="flex px-8 py-2 space-x-2 cursor-pointer hover:bg-gray-400"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Logout</span>
                                                    </span>
                                                </li>
                                            </Fragment>
                                        )}
                                    </div>
                                </div>
                            </Fragment>
                        ) : (
                            /* Login Modal Button */
                            <div
                                onClick={(e) => loginModalOpen()}
                                className="px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                                title="Login"
                            >
                                <svg
                                    className="w-8 h-8 text-gray-600 hover:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg>
                            </div>
                        )}
                        {/* Cart Modal Button */}
                        <div
                            onClick={(e) => cartModalOpen()}
                            className="relative px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                            title="Cart"
                        >
                            <svg
                                className="w-8 h-8 text-gray-600 hover:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span className="absolute top-0 px-1 mt-1 ml-6 text-xs font-semibold text-white bg-yellow-700 rounded hover:text-gray-200">
                                {data.cartProduct !== null
                                    ? data.cartProduct.length
                                    : 0}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        data.navbarHamburger && data.navbarHamburger
                            ? 'px-1 pb-2 md:pb-0 md:px-10 lg:hidden'
                            : 'hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden'
                    }
                >
                    <div className="flex flex-col col-span-1 text-gray-600">
                        <span
                            className="px-3 py-2 text-lg font-medium tracking-widest rounded-lg cursor-pointer hover:text-gray-800 hover:bg-gray-200"
                            onClick={(e) => history.push('/')}
                        >
                            Shop
                        </span>
                        <span
                            className="px-3 py-2 text-lg font-medium tracking-widest rounded-lg cursor-pointer hover:text-gray-800 hover:bg-gray-200"
                            onClick={(e) => history.push('/contact-us')}
                        >
                            Contact us
                        </span>
                    </div>
                </div>
            </nav>
            {/* End Navbar Section */}
        </Fragment>
    )
}

export default Navbar
