//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"

export default function AppHeader() {
    //USE STATE
    const [inputValue, setInputValue] = useState('')
    
    const [render, setRender] = useState([])
    
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
            console.log(render);
            
            
                    
        })
        
    }
    return(
        /* Header */
        <header>
            
            <nav>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={getMoviesList}>Cerca film</button>
            </nav>
            
            <section>

                {render.length === 0 ? 

                    (
                        <span>PROVA A CERCARE QUALCOSA</span>
                    ):(

                        <ul>
                            {render.results.map(movie => (
                                <li>
                                    
                                    {movie.title} <br />
                                    Titolo originale: {movie.original_title} <br />
                                    Lingua: {movie.original_language.toUpperCase()} <br />
                                    Voto: {movie.vote_average.toFixed(1)}

                                </li>
                            ))}
                        </ul>

                    )

                }

            </section>
        </header>
    )
}