import React from "react";
export default class Cart extends React.Component {
  render() {
   
    const allCart = this.props.cartProducts.map((product, index) => {
      //  let product=  arr[i]
      return (
        <div key={index}>
          <p>{index + 1}.</p>
          <p>Product name: {product.name}</p>
          <p>Product Price: {product.price}</p>
          <button onClick={() => this.props.removeCart(product)}>
            Remove from Cart </button>
          <img src={product.imgUrl} height="200" width="200" />
          <p>Count: {product.count}</p>
          <p>Total Product Price: {product.price * product.count}</p>
        </div>
      );
    });

    let total = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.price * elem.count;
    }, 0);
    let totalCount = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.count;
    }, 0);

    return (
      <div>
        <button onClick={() => this.props.removeAll(this.props.product)}>
          Remove All  </button>
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
