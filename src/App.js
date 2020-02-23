import React, { Component } from 'react';
import Container from './components/Container';
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products:[]
     
       
}
}
  componentDidMount() {
    axios({
      method: 'get',
      url: ' https://my-json-server.typicode.com/jubs16/Products/Products',
    })
      .then(res => {
        console.log('RESPONSE: ', res);
        console.log('DATA: ', res.data);
        this.setState({ 
          products: res.data
        
        });


      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  }
  render() {

      return(
        <div>
          <Container products ={this.state.products}
        
         
          />
        </div>
      )
    }
  }

      

  
  