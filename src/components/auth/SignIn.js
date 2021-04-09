import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="col-md-6 offset-md-3 shadow p-md-5 p-sm-3 p-3">
                    <form action="">
                        <div>
                            <h3 className="font-weight-light">
                                Sign In | Blooms Bay
                            </h3>
                        </div>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="emailPhone">
                                Email or phone number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="emailPhone"
                                id="emailPhone"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                            />
                        </div>
                        <button
                            type="button"
                            class="btn btn-dark btn-block mb-1"
                        >
                            SIGNIN
                        </button>
                        <Link to="/signup">Haven't account? Sign Up here</Link>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default SignIn;
