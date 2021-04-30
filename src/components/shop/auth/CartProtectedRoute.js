import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticate } from './FetchApi'

const CartProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            JSON.parse(localStorage.getItem('cart')).length !== 0 &&
            isAuthenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

export default CartProtectedRoute
