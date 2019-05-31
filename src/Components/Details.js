import React, { Component } from 'react';
import { ProductConsumer } from '../ContextApi/Context';
import { Link } from 'react-router-dom';
import { Button } from '../StyleComponents/Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, img, company, price, inCart, info } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-bright text-slanted my-5">
                                    <h1> {title} </h1>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                {/* Product Description */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3> Product: {title} </h3>
                                    <h4 className="text-title mt-3 text-title text-muted text-uppercase mb-2">
                                        Made by: { company }
                                    </h4>
                                    <h4 className="text-accent">
                                        <strong> Price: ₦ {price} </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Info
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/" >
                                            <Button >
                                                Back to Products
                                            </Button>
                                        </Link>
                                        <Button cart disabled={inCart ? true : false} onClick={() => {value.addToCart(id)}}>
                                            {inCart ? "In Cart" : "Add To Cart"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details
