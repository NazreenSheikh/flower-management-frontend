import React, { createContext, Fragment, useEffect, useReducer } from 'react'
import { CartModal, Footer, Navbar } from '../partials'
import { fetchData } from './Action'
import {
    dashboardUserReducer,
    dashboardUserState,
} from './DashboardUserContext'
import Sidebar from './Sidebar'

export const DashboardUserContext = createContext()

const Layout = ({ children }) => {
    const [data, dispatch] = useReducer(
        dashboardUserReducer,
        dashboardUserState
    )

    useEffect(() => {
        fetchData(dispatch)
    }, [])

    return (
        <Fragment>
            <DashboardUserContext.Provider value={{ data, dispatch }}>
                <div className="flex-grow">
                    <Navbar />
                    <CartModal />
                    <div className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24 flex flex-col md:flex-row">
                        <Sidebar />
                        {/* All Children pass from here */}
                        {children}
                    </div>
                </div>
                <Footer />
            </DashboardUserContext.Provider>
        </Fragment>
    )
}

export default Layout
