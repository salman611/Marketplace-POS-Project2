import React from "react";
import Item from "./Item";
import { Container, Row } from "reactstrap";

export default class ContainerPorducts extends React.Component {
  render() {
    // loop over each object in the array and extract each key
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

        // <Item
        //   addToCart={this.props.addCart}
        //   image={product.imgUrl}
        //   key={index}
        //   product={product}
        //   price={product.price}
        //   name={product.name}
        // />
      );
    });

    return (
      <Container>
        <Row>{allProducts}</Row>
      </Container>
    );
  }
}
