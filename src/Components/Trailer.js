import React from 'react'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Trailer = ({movie}) => {
    let history = useHistory();
    return (
        <div style={{marginLeft:"0%", background:"darkred",height:"10%"}}>
            <h1 style={{color:"white",marginLeft:"550px"}}>{movie.name}</h1>
            <ReactPlayer style={{marginLeft:"300px",marginTop:"60px"}}  url={movie.video} />
            <p style={{color:"white", fontWeight:"bold",marginLeft:"50px",padding:"20px",marginTop:"90px"}}>{movie.description}</p>
            
            <Button onClick={() => history.goBack()} variant="dark" style={{marginLeft:"650px"}}>GO Back</Button>
        </div>
    )
}

export default Trailer
