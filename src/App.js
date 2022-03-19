import { useState,useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard';


import './App.css';
import SearchIcon from './search.svg';

//b78c3827

const API_URL = 'http://www.omdbapi.com?apikey=b78c3827';

const movie1= 
    {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    }

const App = () => { 
    const [movies,setMovies] =useState([]);
    const[searchTerm,setSearchTerm] = useState('');


    const searhMovies =async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        

        setMovies(data.Search);

    }

    useEffect(() => {
     searhMovies('batman');  

    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className='search'>
            <input
              placeholder='Search Movies'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value) }
            />

            <img 
            src={SearchIcon} 
            alt='search' 
            onClick={() => searhMovies(searchTerm)} 
            />          
            </div>

            { movies?.length > 0 
                ?(
                    <div className='container'>
                {movies.map((movie) =>(<MovieCard movie={movie}/>))}
                
                </div>
                )
                :(
                    <div className='empty'><h2>No movies found </h2>
                    </div>
                )
            }            
            </div>    
        );
}   

export default App;

