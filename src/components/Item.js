import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
export default class Item extends React.Component {
  render() {

    return (
    <Col xs="4">  
    <Card >
    <CardImg  
          height="200"
          width="200" src={this.props.image}  alt={this.props.name} />
    <CardBody>
      <CardTitle> {this.props.name}</CardTitle>
      <CardSubtitle>Price: ${this.props.price}</CardSubtitle>
      <Button outline color="secondary" onClick={() => this.props.addToCart(this.props.product)}> Add to Cart</Button>
    </CardBody>
  </Card>
</Col>
  );
};
}


//       <div>
//         <p>{this.props.name}</p>
//         <p> Price: ${this.props.price}</p>
//         <button onClick={() => this.props.addToCart(this.props.product)}>
//           Add to Cart
//         </button>
//  
//         <img
//           src={this.props.image}
          // height="200"
          // width="200"
//           alt={this.props.name}
//         />


//       </div>
//     );
//   }
// }

