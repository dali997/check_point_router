import React, {useState} from 'react';
import { moviesData } from './Data';
import './App.css';
import { Route } from 'react-router';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';

import Trailer from './Components/Trailer';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [FilterTitle, setFilterTitle]= useState("")
  const [FilterRating, setFilterRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
// console.log(movies)
  return (
   <div className="good">
     <Route exact path='/' render ={props=>(
       <div>



       <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
         <AddMovie handleMovie={handleMovie} />
          <MovieList movies={movies} FilterTitle={FilterTitle} FilterRating={FilterRating} />
           </div>


     )}
   />
   <Route path='/description/:id' render={props =>
     
    {const id = Number (props.match.params.id)
    const movie = movies.find(movie=>movie.id === id)
    return <Trailer movie={movie}/>
    
    }
    
    
    
    } /> 
   </div>
  );
}

export default App;
