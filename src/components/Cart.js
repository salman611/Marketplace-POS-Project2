import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
export default class Cart extends React.Component {
  
  
  
  render() {

   
    const allCart = this.props.cartProducts.map((product, index) => {

// declar the condition to check if the product is selected or not 
      let textSelectedButton="Unselect this item"
      if(product.selected!==true){
        textSelectedButton="Select this item"
      }
      else {
        textSelectedButton="Unselect this item"
      }
      //  let product=  arr[i]
      return (
        <Col xs="4">  
        <Card >
        <CardImg  
              height="200"
              width="200" src={product.imgUrl}  alt={product.name} />
        <CardBody>
          <CardTitle> {product.name}</CardTitle>
          <CardSubtitle>Price: ${this.props.price}</CardSubtitle>
          <Button outline color="secondary" onClick={() => 
            this.props.removeCart(product)}>  Reduce Item </Button>
            <Button outline color="secondary" onClick={() => 
            this.props.increaseItem(product)}>  Increase Item </Button>
            <Button outline color="secondary" onClick={() => 
            this.props.toggleChecked(product)}>{textSelectedButton}</Button>
            <CardTitle> Count: {product.count}</CardTitle>
            <CardTitle> Total Product Price: {product.price * product.count}</CardTitle>
                </CardBody>
  </Card>
</Col> 
  );
});

    //without bootstrap   
    //   return (
    //     <div key={index}>
    //       <p>{index + 1}.</p>
    //       <p>Product name: {product.name}</p>
    //       <p>Product Price: {product.price}</p>
    //       <button onClick={() => this.props.removeCart(product)}>
    //         Remove from Cart </button>

    //         <button onClick={() => this.props.toggleChecked(product)}>
    //         {textSelectedButton} </button>

    //       <img src={product.imgUrl} alt="" height="200" width="200" />
    //       <p>Count: {product.count}</p>
    //       <p>Total Product Price: {product.price * product.count}</p>
    //     </div>
    //   );
    // });

    let total = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.price * elem.count;
    }, 0);
    let totalCount = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.count;
    }, 0);

    return (
      <div>
        <Button outline color="danger" onClick={() => this.props.removeAll(this.props.product)}>Remove All</Button>
        <button onClick={() => this.props.removeSelectedProduct(this.props.product)}>
            Remove selected Items </button>

        {/* <button onClick={() => this.props.removeAll(this.props.product)}> */}
          {/* Remove All  </button> */}
        {console.log(this.props.cartProducts)}
        {allCart}
        Total price: {total}
        {" || "}
        Total Count: {totalCount}
        {" || "}
        Total Product Types: {this.props.cartProducts.length}
      </div>
    );
  }
}
