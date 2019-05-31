import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';


const ProductContext = React.createContext();

class Context extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct
        }
    }

    // LIfe cycle hook to load the products after the page loads. Like ngOnit in angular
    componentWillMount() {
        this.setProducts();
    }

    /* setProducts: I am doing this so that the original data we are getting from the main array will not be 
    change when we start manipulating the state of then products array. So i am not refrencing the original 
    data coming from the array but i am copying it so that the original data in the array can remain intact.*/
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};  // ...item: Copying the values from the store products array
            products = [...products, singleItem]
        });

        // Set The state after looping through the products.
        this.setState(() => {
            return { products }
        })
    }

    handleDetail = () => {
        console.log("Details");
    }
    
    addToCart = (id) => {
        console.log(`The Id is ${id}`);
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
