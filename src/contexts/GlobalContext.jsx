//IMPORTS
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

//FUNZIONE PER IL PROVIDER

function GlobalProvider ({children}) {
    //INSERISCO I DATI CHE VOGLIO RENDERE GLOBALI

    //USE STATES
    const [inputValue, setInputValue] = useState('')
    const [render, setRender] = useState([])

    return (
        <GlobalContext.Provider 
        value={{
            inputValue,
            setInputValue,
            render,
            setRender
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