import React from 'react';
export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPrices: 0,
      itemCount:0
    };
  }

totalItemCounts= () =>
({
  itemCount: products
}) 
totalPrices= () =>{
  this.setState({
    totalPrices: this.props.price * itemCount
  })
  
}

  render() {
  const allCart = this.props.products.map((product, index) => {
   return (product)
    
    });
 
  return(
    <div>
  {allCart}
  {this.totalPrices}
  {this.totalItemCounts}
    </div>

  )
  }
}