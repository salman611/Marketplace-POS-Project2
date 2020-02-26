import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";
import { Container, Row } from "reactstrap";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


export default class Cart extends React.Component {
  render() {
    const allCart = this.props.cartProducts.map((product, index) => {
      // declar the condition to check if the product is selected or not
      let textSelectedButton = "Unselect this item";
      if (product.selected !== true) {
        textSelectedButton = "Select this item";
      } else {
        textSelectedButton = "Unselect this item";
      }
      //  let product=  arr[i]
      return (
        <Col xs="5">
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
              <RemoveCircleIcon 
                outline
                color="secondary"
                onClick={() => this.props.reduceItem(product)}
              >
                {" "}
                Reduce Item{" "}
                </RemoveCircleIcon >
                <AddCircleIcon
                outline
                color="secondary"
                onClick={() => this.props.increaseItem(product)}
              >
                {" "}
                Increase Item{" "}
                </AddCircleIcon>
           
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
        <Button
          outline
          color="danger"
          onClick={() => this.props.removeAll(this.props.product)}
        >
          Remove All
        </Button>
        <Button
          outline
          color="danger"
          onClick={() => this.props.removeSelectedProduct(this.props.product)}
        >
          Remove selected Items{" "}
        </Button>
        <ListGroup horizontal >
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
      
  {/* other solution  */}
       {/* <FormControl>
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
      </FormControl> */}

    
        
        {/* Total price: {total}
        {" || "}
        Total Count: {totalCount}
        {" || "}
        Total Product Types: {this.props.cartProducts.length} */}
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

