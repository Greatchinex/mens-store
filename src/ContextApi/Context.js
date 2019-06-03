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
            // cart: storeProducts,
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTotal: 0
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
            this.addTotals(); // call back function to add the total price of products immediately after adding product to cart
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

    // Incrementation
    increment = (id) => {
        let tempCart = [...this.state.cart];
        // find the id of the item being clicked uding the find method
        const selectProduct = tempCart.find(item => item.id === id);
        // find the product index
        const index = tempCart.indexOf(selectProduct);
        let product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {cart: [...tempCart]}
        }, () => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        // find the id of the item being clicked uding the find method
        const selectProduct = tempCart.find(item => item.id === id);
        // find the product index
        const index = tempCart.indexOf(selectProduct);
        let product = tempCart[index];

        product.count = product.count - 1;
        // if the count becomes equal to zero remove it from the cart
        if(product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;

            this.setState(() => {
                return {cart: [...tempCart]}
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        // filter id of items in the array
        tempCart = tempCart.filter(item => item.id !== id); // Only the items that do not match the id will be available in the dom
        // get product index
        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        // Reset some Product properties
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        // set the state to the tempCart and tempProductss
        this.setState(() => {
            return{
                cart: [...tempCart],
                product: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
            /* After Clearing the cart the products need to be set bak to their original state and the
            setProducts() function has all the default states of the products in the cart  */
            this.setProducts();
            // get the current total price of products...Just to avoid future problems with the total price.
            this.addTotals();
        })
    }

    // Add total price of all Products
    addTotals = () => {
        let subTotal = 0;
        // Get all the current items in the cart and add thier current total to the subtotal
        this.state.cart.map(item => subTotal += item.total); // .total is from the add to cart function
        const total = subTotal;
        this.setState(() => {
            return{
                cartSubTotal: subTotal,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, // Destructuring The state
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { Context, ProductConsumer }
