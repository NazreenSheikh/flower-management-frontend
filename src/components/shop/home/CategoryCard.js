import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    return (
        <Fragment>
            <div className="row mt-3">
                <div className="col-md-2 col-sm-2">
                    <div className="card CategoryCard">
                        <Link to="">
                            <img
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/static/version1593750225/frontend/Megnor/mag110246_3/en_US/images/category-3.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-md-2 col-sm-3">
                    <div className="card CategoryCard">
                        <Link to="">
                            <img
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/static/version1593750225/frontend/Megnor/mag110246_3/en_US/images/category-3.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-md-2 col-sm-3">
                    <div className="card CategoryCard">
                        <Link to="">
                            <img
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/static/version1593750225/frontend/Megnor/mag110246_3/en_US/images/category-3.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-md-2 col-sm-3">
                    <div className="card CategoryCard">
                        <Link to="">
                            <img
                                src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/static/version1593750225/frontend/Megnor/mag110246_3/en_US/images/category-3.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CategoryCard;
