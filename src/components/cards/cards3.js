import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Wildlife from '../../pictures/wildlifetrackerimage.png'


class Cards4 extends Component{


  render(){
    return(
      <>
      <section id="#link3">
      <Card>
        <Card.Img variant="top" src={Wildlife} />
        <Card.Body>
          <Card.Title>Ruby|Rails</Card.Title>
          <Card.Text>
            API allowing full CRUD functionality on a database containing animal characteristics and sightings.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18/wildlife-tracker-LPeterson18'>Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards4;
