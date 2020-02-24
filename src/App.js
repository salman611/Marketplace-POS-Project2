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

  addfavorite = product => {
    console.log("cart: ", product);
    const newCart = [...this.state.cart, product];
    this.setState({ cart: newCart});
  };

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
    this.setState({ search: searchValue });

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
          <Link to="/">Home Page</Link> <Link to="/Item"></Link>{" "}
          <Link to="/Cart">Cart</Link>
          <Route exact path="/" component={()=><Container products={this.state.products}
            addfavorite={this.addfavorite}/>} />
          <Route path="/Item" component={Item} />
          <Route path="/Cart" component={Cart} />
        </Router>
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
          {/* <Container
            products={this.state.products}
            addfavorite={this.addfavorite}
          /> */}

          <Cart products ={this.state.cart} />
        </div>
      </div>
    );
  }
}
