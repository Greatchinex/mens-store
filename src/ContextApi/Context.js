import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';


const ProductContext = React.createContext();

class Context extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct
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

    // Function to get id of products
    getItem = (id) => {
        const products = this.state.products.find(item => item.id === id);
        return products;
    }

    // Function to get the details of a specific product
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct : product }
        })
    }
    
    // Function to add products to cart
    addToCart = (id) => {
        // Assign the items in the array 2 a new variable: Because i dont want to mutate the state of the original aaray holding the products
        let tempProducts =[...this.state.products];
        // Get the index of each products
        const index = tempProducts.indexOf(this.getItem(id));
        // Now i have d index of each products i set a new variable hold the actual product index
        const product = tempProducts[index];
        // Now the product is in the cart the inCart state will change from false to true
        product.inCart = true;
        // Increase the count of the product since the product is in the cart
        product.count = 1;
        // Set the price to the total amount of products
        product.total = product.price;

        // Change the state of item in the cart: Cause initially the cart is empty
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]}
        }, () => {
            console.log(this.state);
        })
    }

    // Function to open modal
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    // Function to Close modal
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, // Destructuring The state
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { Context, ProductConsumer }
