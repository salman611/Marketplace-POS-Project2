import React from "react";
export default class Item extends React.Component {
  render() {
    // let addButton;
    //  if(this.props.addToFav){
    // addButton=  <button onClick={()=>this.props.addToFav(this.props.product)}>Add to Cart</button>

    //  }
    return (
      <div>
        <p>{this.props.name}</p>
        <p> Price: ${this.props.price}</p>
        <button onClick={() => this.props.addToCart(this.props.product)}>
          Add to Cart
        </button>
        {/* {addButton} */}
        <img
          src={this.props.image}
          height="200"
          width="200"
          alt={this.props.name}
        />
      </div>
    );
  }
}
