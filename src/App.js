import React, { Component } from "react";
import Container from "./components/Container";
import axios from "axios";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import Item from './components/Item';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      search: ""
    };
  }

  addCart = product => {
    // console.log("cart: ", product);
    const newCart = [...this.state.cart];
    // console.log("cart: ", );
    let productIndex=newCart.indexOf(  product)
   //check if this product in the cart
if(productIndex!==-1){
    // count increase 1
newCart[productIndex].count+=1

}else{
    // if it is not there
    //add it with key count 0
    product.count=1
    newCart.push(product)
}
// add the product to cart

  this.setState({ cart: newCart});
}

removeCart = product => {
  const newCart2 = [...this.state.cart];
  let productIndex1= newCart2.indexOf(product)
 //check if this product >0
 if (newCart2.product.count>0){
//  decrease one
newCart2[productIndex1].count-=1
 }
//  ==1
else if 
  (product.count==1){
// remove for the array cart
newCart2.splice(product)
}
this.setState({ cart: newCart2});
}
   



    

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

  handleChange = event => {
    const searchValue = event.target.value;
    console.log(searchValue);
    

    const filteredProducts = this.state.products.filter(function(product) {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    this.setState({ products: filteredProducts });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("Clicked!");
    this.setState({ search: "" });
  };

  render() {
    return (
      <div>
        <Router>
          <nav>
          <Link to="/">Home Page</Link> {'  ||  '}
          <Link to="/Item"></Link> {'  '}
          <Link to="/Cart">Cart</Link>{'  '}
          </nav>
          <div>
          <form>
            <input
              type="text"
              placeholder="Search for shoes..."
              value={this.state.search}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
  
        </div>
          <Route exact path="/" component ={()=> <Container products={this.state.products}
          addCart={this.addCart}/>} />
          <Route path="/Item" component={Item} />
          <Route path="/Cart" component={()=> <Cart cartProducts ={this.state.cart}/>} />
        </Router>
        
      </div>
    );
  }
}
