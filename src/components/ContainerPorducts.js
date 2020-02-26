import React from "react";
import Item from "./Item";
import { Container, Row } from 'reactstrap';


export default class ContainerPorducts extends React.Component {
  render() {
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

    return <Container><Row>{allProducts}</Row></Container>;
  }
}




