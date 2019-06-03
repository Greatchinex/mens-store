import React from 'react'

function CartItem({value, item}) {

    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row text-center text-capitalize my-2">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{width: "5em", height: "5em"}} className="img-fluid" alt="product" />
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Products : </span> {title}
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Price : </span> {price}
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button className="btn btn-black mx-1" onClick={() => decrement(id)}> - </button>
                        <button className="btn btn-black mx-1"> {count} </button>
                        <button className="btn btn-black mx-1" onClick={() => increment(id)}> + </button>
                    </div>
                </div>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <strong>Total : ₦ {total} </strong> 
            </div>
        </div>
    )
}

export default CartItem
