import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAdmin, isAuthenticate } from './FetchApi'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticate() && !isAdmin() ? (
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

export default ProtectedRoute
