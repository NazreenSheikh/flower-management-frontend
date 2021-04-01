import React, { Fragment } from 'react';
import "./index.css"

const Navber = (props) => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg topbar">
                <div className="container">
                    <a style={{ fontSize: "30px" }} className="navbar-brand" href="/"><span className="logo">Bloom</span><strong>Bay</strong></a>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item mr-lg-4">
                                <i className="material-icons">search</i>
                            </li>
                            <li className="nav-item mr-lg-5">
                                <a href="/cart">
                                    <i className="material-icons">add_shopping_cart</i> <strong>10</strong></a>
                            </li>
                            <li className="nav-item mr-lg-4">
                                <div className="dropdown">
                                    <button className="btn btn-light text-dark dropdown-toggle" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More
					  </button>
                                    <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="/login">Login</a>
                                        <a className="dropdown-item" href="/signup">Signup</a>
                                        <a className="dropdown-item" href="/login/admin">Admin Login</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navber;