import React, { Fragment, useContext, useEffect, useState } from 'react'
import { updatePersonalInformationAction } from './Action'
import Layout, { DashboardUserContext } from './Layout'

const ProfileComponent = () => {
    const { data, dispatch } = useContext(DashboardUserContext)
    const userDetails = data.userDetails !== null ? data.userDetails : ''

    const [fData, setFdata] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        success: false,
    })

    useEffect(() => {
        setFdata({
            ...fData,
            id: userDetails.user_id,
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phoneNumber,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userDetails])

    const handleSubmit = () => {
        updatePersonalInformationAction(dispatch, fData)
    }

    if (data.loading) {
        return (
            <div className="flex items-center justify-center w-full md:w-9/12 ">
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
                <div className="border shadow-lg">
                    <div className="px-4 py-4 text-lg font-semibold border-t-2 border-yellow-700">
                        Personal Information
                    </div>
                    <hr />
                    <div className="flex flex-col px-4 py-4 space-y-4 md:px-8 lg:px-16">
                        {fData.success ? (
                            <div className="px-4 py-2 bg-green-200 rounded">
                                {fData.success}
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, name: e.target.value })
                                }
                                value={fData.name}
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">Email</label>
                            <input
                                value={fData.email}
                                readOnly
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 bg-gray-200 border cursor-not-allowed focus:outline-none focus:cursor-not-allowed"
                            />
                            <span className="text-xs text-gray-500">
                                You can't change your email
                            </span>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="number">Phone Number</label>
                            <input
                                onChange={(e) =>
                                    setFdata({
                                        ...fData,
                                        phone: e.target.value,
                                    })
                                }
                                value={fData.phone}
                                type="number"
                                id="number"
                                className="w-full px-4 py-2 border focus:outline-none"
                            />
                        </div>
                        <div
                            onClick={(e) => handleSubmit()}
                            style={{ background: '#303031' }}
                            className="w-full px-4 py-2 text-center text-gray-100 cursor-pointer"
                        >
                            Update Information
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const UserProfile = (props) => {
    return (
        <Fragment>
            <Layout children={<ProfileComponent />} />
        </Fragment>
    )
}

export default UserProfile
