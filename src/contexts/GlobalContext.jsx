//IMPORTS
import { createContext, useContext, useState } from "react";
import { Riple } from "react-loading-indicators";
const GlobalContext = createContext();

//FUNZIONE PER IL PROVIDER

function GlobalProvider ({children}) {
    //INSERISCO I DATI CHE VOGLIO RENDERE GLOBALI

    //USE STATES
    const [inputValue, setInputValue] = useState('')
    const [moviesList, setMoviesList] = useState([])
    const [seriesList, setSeriesList ] = useState([])
    const [search, setSearch] = useState(false)
    const [loading, setLoading] =useState(<Riple color="#ea0000" size="medium" text="" textColor="" />)
    const [renderMoviesInfo, setRenderMoviesInfo] = useState(true)
    //DATA
    /* const language = [
        {
            char: 'IT'
            icon: 
        }
    ] */

    return (
        <GlobalContext.Provider 
        value={{
            inputValue,
            setInputValue,
            moviesList,
            setMoviesList,
            seriesList,
            setSeriesList,
            search, 
            setSearch,
            loading,
            setLoading,
            renderMoviesInfo,
            setRenderMoviesInfo
        }} 
        
        >
            {children}

        </GlobalContext.Provider>
    )
}

//FUNZIONE PER IL CUSTOM HOOK

function useGlobal () {
    const context = useContext(GlobalContext)

    return context
}

//ESPORTIAMO IL TUTTO

export { GlobalProvider, useGlobal }