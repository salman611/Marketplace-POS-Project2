//child of app.js
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
import { Container, Row } from "reactstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export default class Cart extends React.Component {
  render() {

    // map over the array to get each key inside each obeject that is send from app.js

    const allCart = this.props.cartProducts.map((product, index) => {

      // declar the condition to check if the product is selected or not

      let textSelectedButton = "Unselect this item";
      if (product.selected !== true) {
        // yes
        textSelectedButton = "Select this item";
      } else {
        // no
        textSelectedButton = "Unselect this item";
      }

      return (

        // add col xs="5" to arrange the cards to be shown 2 next to each other

        <Col xs="5">

          {/* card from reactstrap to contain each product  image, price , name */}

          <Card>
            <CardImg
              height="200"
              width="200"
              src={product.imgUrl}
              alt={product.name}
            />
            <CardBody>
              <CardTitle> {product.name}</CardTitle>
              <CardSubtitle>Price: ${product.price}</CardSubtitle>

              {/* // reduce icon to decrease each product count  */}

              <RemoveCircleIcon
                outline
                color="secondary"
                onClick={() => this.props.reduceItem(product)}
              >
                {" "}
                Reduce Item{" "}
              </RemoveCircleIcon>

              {/* // add icon to increase each product count  */}

              <AddCircleIcon
                outline
                color="secondary"
                onClick={() => this.props.increaseItem(product)}
              >
                {" "}
                Increase Item{" "}
              </AddCircleIcon>

              {/* // toggle button to toggle between select and unselect product  */}

              <Button
                outline
                color="secondary"
                onClick={() => this.props.toggleChecked(product)}
              >
                {textSelectedButton}
              </Button>

              <CardTitle> Count: {product.count}</CardTitle>
              <CardTitle>
                {" "}
                Total Product Price: {product.price * product.count}
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      );
    });

    // console.log(this.props)
    // -------------------------------------------------------------------

    //without reactstrap

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

    // -------------------------------------------------------------------

    // to find the total price for all products

    let total = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.price * elem.count;
    }, 0);

    //to find the total counts for all products

    let totalCount = this.props.cartProducts.reduce((acc, elem, i) => {
      return acc + elem.count;
    }, 0);

    return (
      <div>
        {/* // button to remove all products  */}

        <Button
          outline
          color="danger"
          onClick={() => this.props.removeAll()}
        >
          Remove All
        </Button>
        {/* // button to remove selected products  */}
        <Button
          outline
          color="danger"
          
          // becuae we will not pass props we can write it  onClick={this.props.removeSelectedProduct}
          //if we want to pass something we have to put function before ex, 
          //    onClick= {() this.props.removeSelectedProduct ()} 
          onClick={
            this.props.removeSelectedProduct
         }
        >
          Remove selected Items{" "}
        </Button>

        {/* design to have total price,count,types for all products   */}

        <ListGroup horizontal>
          <ListGroup.Item action variant="info">
            Total price: {total}
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Total Count: {totalCount}
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Total Product Types: {this.props.cartProducts.length}
          </ListGroup.Item>
        </ListGroup>
        <Container>
          <Row>
            {console.log(this.props.cartProducts)}
            {allCart}
          </Row>
        </Container>
        ;
      </div>
    );
  }
}

{
  /* // -------------------------------------------------------------------   */
}
{
  /* another style for total price counts, and types  */
}
{
  /* <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment"> Total price: {total} </InputLabel>
        <Input
          id="input-with-icon-adornment"
        
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">   Total Count: {totalCount}</InputLabel>
        <Input
          id="input-with-icon-adornment"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">   Total Product Types: {this.props.cartProducts.length} </InputLabel>
        <Input
          id="input-with-icon-adornment"
    
        />
      </FormControl> */
}
{
  /* Total price: {total}
        {" || "}
        Total Count: {totalCount}
        {" || "}
        Total Product Types: {this.props.cartProducts.length} */
}
{
  /* // -------------------------------------------------------------------   */
}
