//IMPORTS
import { createContext, useContext, useState } from "react";
import { Riple } from "react-loading-indicators";
import AppCircleLoading from "../components/AppCircleLoading";

const GlobalContext = createContext();

//FUNZIONE PER IL PROVIDER

function GlobalProvider ({children}) {
    //INSERISCO I DATI CHE VOGLIO RENDERE GLOBALI

    //USE STATES
    const [inputValue, setInputValue] = useState('')
    const [moviesList, setMoviesList] = useState([])
    const [seriesList, setSeriesList ] = useState([])
    const [search, setSearch] = useState(false)
    const [loading, setLoading] =useState(<Riple color="#ea0000" size="large" text="" textColor="" />)
    const [hoverRender, setHoverRender] = useState(false)
    const [selected, setSelected] = useState(false)
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
            hoverRender,
            setHoverRender,
            selected,
            setSelected
            
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