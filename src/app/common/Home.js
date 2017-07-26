import React from 'react';
import { Container } from 'reactstrap';

export class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="jumbotron">
          <Container> 
            <h1>Hello, world!</h1>
            <p>This is the home Page</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </Container>
        </div>
      </div>
    );
  }
}
