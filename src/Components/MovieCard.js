import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Rating} from "@mui/material"
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {

    return (
      <Link to={`/description/${movie.id}`} style={{textDecoration:"none",color:"darkred",fontFamily:"monospace",fontWeight:"bold"}} >
        <div style={{margin:"2rem",padding:"1rem" , border:"1px solid grey", marginLeft:"50px"}}>
            <Card style={{ width: '18rem' }}>
  <Card.Img style={{ height:"18rem" }} variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title> {movie.name} </Card.Title>
    <Card.Text style={{ height:"11rem" }}>
      {movie.description}
    </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly />

    <Button variant="danger">See Trailer</Button>
  </Card.Body>
</Card>

        </div>
        </Link>
    )
}

export default MovieCard
