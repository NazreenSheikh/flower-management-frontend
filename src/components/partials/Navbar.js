import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navber = (props) => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg topbar">
                <div className="container">
                    <Link
                        style={{ fontSize: "30px" }}
                        className="navbar-brand"
                        to="/"
                    >
                        <span className="logo">Blooms</span>
                        <strong>Bay</strong>
                    </Link>
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item mr-lg-4">
                                <i className="material-icons">search</i>
                            </li>
                            <li className="nav-item mr-lg-4">
                                <Link to="/cart">
                                    <i className="material-icons">
                                        add_shopping_cart
                                    </i>{" "}
                                    <strong>10</strong>
                                </Link>
                            </li>
                            <li className="nav-item mr-lg-4">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item mr-lg-4">
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navber;
