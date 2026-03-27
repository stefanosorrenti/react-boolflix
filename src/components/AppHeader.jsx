//IMPORTS
import axios from "axios"
import { useGlobal } from "../contexts/GlobalContext"
import { Riple } from "react-loading-indicators";


export default function AppHeader() {
    //USE STATE (IMPORTATI CON CUSTOM HOOK)
    const { inputValue,  setInputValue, setMoviesList, setSeriesList, setSearch, setLoading  } = useGlobal();

    
    //DATA
    const API_KEY = import.meta.env.VITE_API_KEY
    const apiMoviesEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    const apiSeriesEndPoint = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${inputValue.toLowerCase().replaceAll(" ", "-")}&`
    
    
   
    
    //FUNCTIONS
    function getMoviesList (e) { //EFFETUO LE CHIAMATAE AJAX
        e.preventDefault()
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

        setSearch(true)
        setLoading(<Riple color="#ea0000" size="medium" text="" textColor="" />)
    }

    //console.log(render.length);
    
    return(
        /* Header */
        <header className="p-3">
            
            {/* NavBar */}
            <nav>
                <a class="navbar-brand" href="#">
                <img src= "../src/assets/img/mobile-logo.png" alt="" />
                <img src= "../src/assets/img/desktop-logo.png" alt=""  />
                </a>
                
                {/* FORM FOR SEARCH */}
                <form onSubmit={getMoviesList}>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} className="form-control-sm" /> {/* Rendo dinamico il mio input value */}
                <button disabled = {inputValue.length == 0 && true} className="btn btn-danger">Cerca film</button>

                </form>
            </nav>
            
           
        </header>
    )
}       

