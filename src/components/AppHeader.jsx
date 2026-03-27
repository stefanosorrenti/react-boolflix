//IMPORTS
import axios from "axios"
import { useGlobal } from "../contexts/GlobalContext"



export default function AppHeader() {
    //USE STATE (IMPORTATI CON CUSTOM HOOK)
    const { inputValue,  setInputValue, setMoviesList, setSeriesList  } = useGlobal();

    
    //DATA
    const API_KEY = import.meta.env.VITE_API_KEY
    const apiMoviesEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    const apiSeriesEndPoint = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    
    
   
    
    //FUNCTIONS
    function getMoviesList () { //EFFETUO LE CHIAMATAE AJAX
        axios.get(apiMoviesEndPoint)
        .then(res => {
            //console.log(res.data.results);
            //console.log(apiMoviesEndPoint);
            //console.log(renderMovies.length);
            
            setMoviesList(res.data.results)
            setInputValue('')
            //console.log(render);
            
            
            
            
            
            
                    
        })

        axios.get(apiSeriesEndPoint)
        .then(res => {

            //console.log(res.data.results);
            //console.log(res.data.results)
            setSeriesList(res.data.results)
            
            
            
            
        })

        
    }

    //console.log(render.length);
    
    return(
        /* Header */
        <header>
            
            {/* NavBar */}
            <nav>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} /> {/* Rendo dinamico il mio input value */}
                <button disabled = {inputValue.length == 0 && true} onClick={getMoviesList}>Cerca film</button>
            </nav>
            
           
        </header>
    )
}       

