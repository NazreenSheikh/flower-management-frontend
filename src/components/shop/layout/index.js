import React, { createContext, Fragment } from 'react'
import LoginSignup from '../auth/LoginSignup'
import { CartModal, Footer, Navbar } from '../partials'

export const LayoutContext = createContext()

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="flex-grow">
                <Navbar />
                <LoginSignup />
                <CartModal />
                {/* All Children pass from here */}
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Layout
