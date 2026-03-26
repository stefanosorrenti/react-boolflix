//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"

export default function AppHeader() {
    //USE STATE
    const [inputValue, setInputValue] = useState('')
    
    
    //DATA
    const API_KEY = import.meta.env.VITE_API_KEY
    const apiMoviesEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    
    
    
    
    //FUNCTIONS
    function getMoviesList () {
        axios.get(apiMoviesEndpoint)
        .then(res => {
            console.log(res.data.results);
            console.log(apiMoviesEndpoint);
            
            
        
            
        })
        
    }
    return(
        /* Header */
        <header>
            
            <nav>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={getMoviesList}>Cerca film</button>
            </nav>
            
        </header>
    )
}