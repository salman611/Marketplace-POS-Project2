
import React from 'react';
import List from './List';


export default class Container extends React.Component {
   

render() {
    const allProducts = this.props.products.map(function(product, index) {
        return (<List image = {product.imgUrl} key={index} 
            price={product.price}  name= {product.name}/>
      )})


        return(
        <div>
            {allProducts}
        </div>
        )
      }
    }
