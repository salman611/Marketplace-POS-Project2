import React from "react";
import Item from "./Item";
import { Container, Row } from "reactstrap";

export default class ContainerPorducts extends React.Component {
  render() {
    // loop over the array for and get the keys of each object that are sent from app.js
    //  and send props to item, which is a child of this componenet

    const allProducts = this.props.products.map((product, index) => {
      return (
        <Item
          addToCart={this.props.addCart}
          image={product.imgUrl}
          key={index}
          product={product}
          price={product.price}
          name={product.name}
        />
      );
    });

    return (
      //contianer and row from reactstrap to hold all the cards

      <Container>
        <Row>{allProducts}</Row>
      </Container>
    );
  }
}
