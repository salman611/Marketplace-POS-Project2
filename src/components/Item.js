import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
export default class Item extends React.Component {
  render() {
    return (

      // col to make 3 products align in each row from reactstrap

      <Col xs="4">

{/* card from reactstrap to contain each product  image, price , name */}

        <Card>
          <CardImg
            height="200"
            width="200"
            src={this.props.image}
            alt={this.props.name}
          />
          <CardBody>
            <CardTitle> {this.props.name}</CardTitle>
            <CardSubtitle>Price: ${this.props.price}</CardSubtitle>

            {/* cart icon */}

            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => this.props.addToCart(this.props.product)}
            >
              <AddShoppingCartIcon />
            </IconButton>

            {/* other button for the same usage */}

            <Button
              outline
              color="secondary"
              onClick={() => this.props.addToCart(this.props.product)}
            >
              {" "}
              Add to Cart
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

// -------------------------------------------------------------------

//without react boostrap
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
