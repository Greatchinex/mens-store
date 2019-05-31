import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';


const ProductContext = React.createContext();

class Context extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: storeProducts,
            detailProduct
        }
    }

    handleDetail = () => {
        console.log("Details");
    }
    
    addToCart = () => {
        console.log("Added to Cart");
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, // Destructuring The state
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { Context, ProductConsumer }
