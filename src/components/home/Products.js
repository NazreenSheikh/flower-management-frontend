import React, { Fragment } from "react";

const Product = (props) => {
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    {/* <Subcategory /> */}
                    {/* <div className="col-md-9"> */}
                    {/* <div className="row"> */}
                    <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                        <div class="card customShadow customCardSize">
                            <img
                                class="card-img-top"
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/7/9/79_2_1_1.jpg"
                                alt="Card pic cap"
                            />
                            <div class="card-body">
                                <div>Product Name</div>
                                <div>Price</div>
                                <button className="btn btn-dark mt-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                        <div class="card customShadow customCardSize">
                            <img
                                class="card-img-top"
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/8/8/88.jpg"
                                alt="Card pic cap"
                            />
                            <div class="card-body">
                                <div>Product Name</div>
                                <div>Price</div>
                                <button className="btn btn-dark mt-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                        <div class="card customShadow customCardSize">
                            <img
                                class="card-img-top"
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/2/9/29_1.jpg"
                                alt="Card pic cap"
                            />
                            <div class="card-body">
                                <div>Product Name</div>
                                <div>Price</div>
                                <button className="btn btn-dark mt-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xl-3 mb-3">
                        <div class="card customShadow customCardSize">
                            <img
                                class="card-img-top"
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/2/9/29_1.jpg"
                                alt="Card pic cap"
                            />
                            <div class="card-body">
                                <div>Product Name</div>
                                <div>Price</div>
                                <button className="btn btn-dark mt-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Product;
