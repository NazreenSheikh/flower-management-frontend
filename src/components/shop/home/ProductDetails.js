import React, { Fragment } from "react";
import ProductCard from "./ProductCard";

const ProductDetail = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            style={{ height: "500px;" }}
                            src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/7/9/79_2_1_1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <h1>Product Name</h1>
                        <h4>Rating: 4</h4>
                        {/* <div>
                            <button type="button" class="btn btn-outline-dark">
                                Shipping 4 days offer
                            </button>
                        </div> */}
                        <h5>Short Descriptions:</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi quaerat, expedita quibusdam et esse
                            repudiandae asperiores magnam nesciunt.
                        </p>
                        <div>
                            <button
                                type="button"
                                class="btn customShadow btn-dark btn-block shadow"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                        <form action="">
                            <label htmlFor="reviewBody">Your Review</label>
                            <textarea
                                className="form-control"
                                name="reviewBody"
                                placeholder="Type something about the product..."
                                id="reviewBody"
                                cols="5"
                                rows="3"
                            ></textarea>
                            <button className="btn btn-sm btn-dark mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4>Reviews</h4>
                        <hr />
                        <div className="row mb-3">
                            <div>
                                <div className="col-md-12">Username</div>
                                <div className="col-md-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Modi quaerat, expedita
                                    quibusdam et esse repudiandae asperiores
                                    magnam nesciunt. Sequi sed quam quaerat,
                                    ipsum eveniet nulla, natus in laboriosam
                                    vitae nemo!
                                </div>
                                <div className="col-md-12">Rating 4 Star</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div>
                                <div className="col-md-12">Username</div>
                                <div className="col-md-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Modi quaerat, expedita
                                    quibusdam et esse repudiandae asperiores
                                    magnam nesciunt. Sequi sed quam quaerat,
                                    ipsum eveniet nulla, natus in laboriosam
                                    vitae nemo!
                                </div>
                                <div className="col-md-12">Rating 4 Star</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div>
                                <div className="col-md-12">Username</div>
                                <div className="col-md-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Modi quaerat, expedita
                                    quibusdam et esse repudiandae asperiores
                                    magnam nesciunt. Sequi sed quam quaerat,
                                    ipsum eveniet nulla, natus in laboriosam
                                    vitae nemo!
                                </div>
                                <div className="col-md-12">Rating 4 Star</div>
                            </div>
                        </div>
                    </div>
                </div>
                 */}
                <h2 className="text-center">Recommended Product</h2>
                <br />
                <ProductCard />
            </div>
        </Fragment>
    );
};

export default ProductDetail;
