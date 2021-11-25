import React from 'react'

import MovieCard from './MovieCard'

const MovieList = ({movies, FilterTitle, FilterRating}) => {
    
    return (
        <div style={{display:"flex",flexWrap:"wrap",margin:"1rem",padding:"1rem" , border:"1px solid grey"}}>
            {
                movies
                .filter((movie)=>
                movie.name.toLowerCase().includes(FilterTitle.toLowerCase().trim()) &&
                movie.rating >= FilterRating
                )
                .map((movie)=>(
                  
                    <MovieCard movie={movie} key={movie.id} />
                  
                ))
            }
        </div>
    )
}

export default MovieList
