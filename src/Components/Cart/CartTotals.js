import React from 'react';
import {Link} from 'react-router-dom';
import PaystackButton from 'react-paystack';

function CartTotals({value}) {

    const { cartSubTotal, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger mb-3 text-capitalize px-5" type="button" onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">Subtotal :</span>
                            <strong> ₦ {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total :</span>
                            <strong> ₦ {cartTotal} </strong>
                        </h5>
                        <PaystackButton />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartTotals
