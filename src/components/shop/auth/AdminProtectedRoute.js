import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAdmin, isAuthenticate } from './FetchApi'

const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAdmin() && isAuthenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/user/profile',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

export default AdminProtectedRoute
