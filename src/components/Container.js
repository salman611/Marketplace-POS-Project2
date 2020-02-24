
import React from 'react';
import Item from './Item';


export default class Container extends React.Component {
   

render() {
  const allProducts = this.props.products.map((product, index) =>{
    return (<Item addToFav={this.props.addfavorite} image = {product.imgUrl} key={index} product={product}
        price={product.price}  name= {product.name}/>
  )})

    


        return(
        <div>
            {allProducts}
          
        </div>
        )
      }
    }
