import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <Fragment>
            <div className="text-left mt-3">
                <h4>Category Name</h4>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-md-6 col-xl-3  mb-3">
                    <div className="card customShadow customCardSize">
                        <img
                            className="card-img-top"
                            src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/7/9/79_2_1_1.jpg"
                            alt="Card pic cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                    <div className="card customShadow customCardSize">
                        <img
                            className="card-img-top"
                            src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/8/8/88.jpg"
                            alt="Card pic cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                    <div className="card customShadow customCardSize">
                        <img
                            className="card-img-top"
                            src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/2/9/29_1.jpg"
                            alt="Card pic cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                    <div className="card customShadow viewAllProdcutCard customCardSize">
                        <div className="card-body text-center">
                            <h3>Category Name</h3>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <button
                                type="button"
                                className="btn btn-dark customShadow"
                            >
                                <Link to="/products">View All</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductCard;
