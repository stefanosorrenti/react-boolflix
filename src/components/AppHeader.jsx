//IMPORTS
import axios from "axios"
import { useGlobal } from "../contexts/GlobalContext"
import { useState } from "react"

export default function AppHeader() {
    //USE STATE (IMPORTATI CON CUSTOM HOOK)
    const { inputValue,  setInputValue, render, setRender } = useGlobal();
    
    
    //DATA
    const API_KEY = import.meta.env.VITE_API_KEY
    const apiMoviesEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    
    
    
    
    //FUNCTIONS
    function getMoviesList () {
        axios.get(apiMoviesEndpoint)
        .then(res => {
            //console.log(res.data.results);
            //console.log(apiMoviesEndpoint);
            //console.log(renderMovies.length);
            setRender(res.data)
            setInputValue('')
            console.log(render);
            
            
                    
        })
        
    }
    return(
        /* Header */
        <header>
            
            {/* NavBar */}
            <nav>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={getMoviesList}>Cerca film</button>
            </nav>
            
           
        </header>
    )
}