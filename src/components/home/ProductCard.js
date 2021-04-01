import React, { Fragment } from 'react';

const ProductCard = (props) => {
    return (
        <Fragment>
            <div className="text-left mt-3"><h4>Category Name</h4></div>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <div className="card customShadow" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/7/9/79_2_1_1.jpg" alt="Card pic cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card customShadow" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/8/8/88.jpg" alt="Card pic cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card customShadow" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/2/9/29_1.jpg" alt="Card pic cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card customShadow viewAllProdcutCard" style={{ width: "18rem" }}>
                        <div className="card-body text-center">
                            <h3>Category Name</h3>
                            <button type="button" className="btn btn-dark customShadow">View All</button>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard;