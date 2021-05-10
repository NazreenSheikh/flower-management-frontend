import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const AdminNavbar = (props) => {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('cart')
        localStorage.removeItem('wishList')
        window.location.href = '/'
    }

    return (
        <Fragment>
            <nav className="sticky top-0 z-10 flex items-center justify-between w-full px-4 py-4 bg-white shadow-md md:px-8">
                <div className="hidden lg:block">
                    <span
                        onClick={(e) => history.push('/admin/dashboard')}
                        style={{ letterSpacing: '0.70rem' }}
                        className="flex px-2 text-2xl font-bold text-center text-gray-800 uppercase cursor-pointer items-left"
                    >
                        BloomsBay
                    </span>
                </div>
                {/* Small Screen Show */}
                <div className="flex items-center lg:hidden">
                    <span
                        onClick={(e) => history.push('/admin/dashboard')}
                        style={{ letterSpacing: '0.10rem' }}
                        className="flex px-2 text-2xl font-bold text-center text-gray-800 uppercase cursor-pointer items-left"
                    >
                        BloomsBay
                    </span>
                </div>
                {/* Both Screen show */}
                <div className="flex items-center">
                    {/* Logout Button Dropdown */}
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
                            <li className="flex flex-col text-gray-700">
                                <span
                                    onClick={(e) => history.push('/')}
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
                                                strokeWidth={2}
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Shop</span>
                                </span>

                                <span
                                    onClick={(e) => logout()}
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
                                                strokeWidth={2}
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                    </span>
                                    <span>Logout</span>
                                </span>
                            </li>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                {/* End Mobile Navbar */}
            </nav>
        </Fragment>
    )
}

export default AdminNavbar
