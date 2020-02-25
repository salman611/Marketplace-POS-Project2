import React from "react";
export default class Cart extends React.Component {


 
  render() {
    // count=0,
    // console.log(this.props.products)
    // const filterProducts = this.props.products.filter((element,index)=>{
    //   if element.includes(this.props.products){
    //     return <count></count>
     
    //   }
    // }
    // )
    // console.log(filterProducts);
    
    const allCart = this.props.cartProducts.map((product,index) => {
    //  let product=  arr[i]
      return (
        <div key={index}>
    <p>{index+1}.</p>
          <p>Product name: {product.name}</p>
          <p>Product Price: {product.price}</p>
          <img src= {product.imgUrl} height="200" width="200"/>
          <p>Count: {product.count}</p>
          <p>Total Product Price: {product.price*product.count}</p>

        </div>
      );
    });

    let total= this.props.cartProducts.reduce((acc,elem,i)=>{
      return acc+elem.price
    },0)

    return (
      <div>
        {console.log(this.props.cartProducts)}
        {allCart}
        Total price: {total}{' || '}
        Total Count: { this.props.cartProducts.length}
      </div>
    );
  }
}
