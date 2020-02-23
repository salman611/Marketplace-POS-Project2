import React from 'react';
export default class List extends React.Component {
render() {
 
  return(
    <div>
    <p>{this.props.name}</p>
    <img src= {this.props.image} height="200" width="200" alt= {this.props.name}/>
    <p> Price: ${this.props.price}</p>
    </div>


  )
  }
}

