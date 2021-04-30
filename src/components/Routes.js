import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Categories, DashboardAdmin, Orders, Products } from './admin'
import {
    AdminProtectedRoute,
    CartProtectedRoute,
    CheckoutPage,
    Home,
    PageNotFound,
    ProductByCategory,
    ProductDetails,
    ProtectedRoute,
    WishList,
} from './shop'
import { SettingUser, UserOrders, UserProfile } from './shop/dashboardUser'

/* Routing All page will be here */
const Routes = (props) => {
    return (
        <Router>
            <Switch>
                {/* Shop & Public Routes */}
                <Route exact path="/" component={Home} />
                <Route exact path="/wish-list" component={WishList} />
                <Route exact path="/products/:id" component={ProductDetails} />
                <Route
                    exact
                    path="/products/category/:catId"
                    component={ProductByCategory}
                />
                <CartProtectedRoute
                    exact={true}
                    path="/checkout"
                    component={CheckoutPage}
                />
                {/* Shop & Public Routes End */}

                {/* Admin Routes */}
                <AdminProtectedRoute
                    exact={true}
                    path="/admin/dashboard"
                    component={DashboardAdmin}
                />
                <AdminProtectedRoute
                    exact={true}
                    path="/admin/dashboard/categories"
                    component={Categories}
                />
                <AdminProtectedRoute
                    exact={true}
                    path="/admin/dashboard/products"
                    component={Products}
                />
                <AdminProtectedRoute
                    exact={true}
                    path="/admin/dashboard/orders"
                    component={Orders}
                />
                {/* Admin Routes End */}

                {/* User Dashboard */}
                <ProtectedRoute
                    exact={true}
                    path="/user/profile"
                    component={UserProfile}
                />
                <ProtectedRoute
                    exact={true}
                    path="/user/orders"
                    component={UserOrders}
                />
                <ProtectedRoute
                    exact={true}
                    path="/user/setting"
                    component={SettingUser}
                />
                {/* User Dashboard End */}

                {/* 404 Page */}
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
