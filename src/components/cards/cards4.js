import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import CatTinder from '../../pictures/cattindergif.gif'


class Cards5 extends Component{


  render(){
    return(
      <>
      <section id="#link4">
      <Card>
        <Card.Img variant="top" src={CatTinder} />
        <Card.Body>
          <Card.Title>React|JavaScript|HTML|CSS|Ruby|Rails</Card.Title>
          <Card.Text>
            Full stack, decoupled web app with React front end and Rails backend. Look at, create, and update cat profiles.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18/cat-tinder-frontend'>Check out frontend!</Button>
          <Button variant="dark" href='https://github.com/LPeterson18/cat-tinder-backend'>Check out backend!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards5;
