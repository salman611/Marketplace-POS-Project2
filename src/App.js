import React, { Component } from "react";
import ContainerPorducts from "./components/ContainerPorducts";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Item from "./components/Item";
import NavBar from './components/NavBar'
import { Button } from 'reactstrap';
import { Badge } from 'reactstrap';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initial value for all the products
      products: [],
      //initial value for selected prodcuts
      cart:[],
      //give the search box empty string
      search: "",
      checked: false
    };
  }
  // make function to add product to cart and connect it with Cart component as a child
  addCart = product => {
    // console.log("cart: ", product);
    // copy the cart array
    const newCart = [...this.state.cart];
    // console.log("cart: ", );
    //second solution// let productIndex = newCart.indexOf(product)
    //find the index of the selected prodcut
    const productIndex = newCart.findIndex(p => p.name === product.name);
    console.log(productIndex);
    //check if this product in the cart
    if (productIndex !== -1) {
      // count increase 1
      newCart[productIndex].count += 1;
    } else {
      // if it is not there
      //add it with key count 0
      product.count = 1;
      newCart.push(product);

    }
    // add the product to cart

    this.setState({ cart: newCart })
    
  };
  // remove product form Cart
  removeCart = product => {
    const secondNewCart = [...this.state.cart];
    const secondProductIndex = secondNewCart.findIndex(p => p.name === product.name);
    console.log("salman", secondNewCart);
//second solution 
    // const secondProductIndex = secondNewCart.indexOf(product);
   
    //check if this product >0
    if (secondNewCart[secondProductIndex].count > 1) {
      //  decrease one
      secondNewCart[secondProductIndex].count -= 1;
    }
    //  ==1
    else {
      // remove for the array cart
      secondNewCart.splice(secondProductIndex, 1);
    }
    this.setState({ cart: secondNewCart });
  };
  //remove all the products in the cart
  removeAll = () => {
    this.setState({ cart: [] });
  };
toggleCheckedProducts= ()=>{
 
}
  // removeSelectedProducts= () =>{
  //   if (product.checked === true)
  //     product.checked= false

  // }

  // connect to API
  componentDidMount() {
    axios({
      method: "get",
      url: " https://my-json-server.typicode.com/jubs16/Products/Products"
    })
      .then(res => {
        console.log("RESPONSE: ", res);
        console.log("DATA: ", res.data);
        this.setState({
          products: res.data
        });
      })

      .catch(err => {
        console.log("ERROR: ", err);
      });
  }

  // function for the value of search box
  handleChange = event => {
    const searchValue = event.target.value;
    console.log(searchValue);
    // iterate over to make sure the product names and inserted value lowercase
    const filteredProducts = this.state.products.filter(function(product) {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    this.setState({ products: filteredProducts });
  };

  //sumbit the search 
  handleSubmit = event => {
    event.preventDefault();
    console.log("Clicked!");
    this.setState({ search: "" });
  };

  // handleCheckboxChange = event =>
  //     this.setState({ checked: event.target.checked })

  render() {

    return (
      <div>
        <Router>
  
    <NavBar/>
          <nav>

            <Link to="/">Home Page</Link> {"  ||  "}
            <Link to="/Item"></Link> {"  "}
            <Link to="/Cart">Cart</Link>
            {"  "}
          </nav>
          <div>
            <form>
              <input
                type="text"
                placeholder="Search for shoes..."
                value={this.state.search}
                onChange={this.handleChange}
              />
              <Button outline color="info" onClick={this.handleSubmit}>submit</Button>{' '}
              {/* <input type="submit" value="Submit" onClick={this.handleSubmit} /> */}
            </form>
          </div>
          <Route
            exact
            path="/"
            component={() => (
              <ContainerPorducts
                products={this.state.products}
                addCart={this.addCart}
              />
            )}
          />
          <Route path="/Item" component={Item} />
          <Route
            path="/Cart"
            component={() => (
              <Cart
                cartProducts={this.state.cart}
                removeCart={this.removeCart}
                removeAll={this.removeAll}
                remveChecked={this.remveChecked}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
