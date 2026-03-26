//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"
import AppCard from "./AppCard"

export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { moviesList, seriesList } = useGlobal()


    
    return (
        <main>
            {/* DynamicRender */}

            {moviesList.length === 0 ? //Se l'array che renderizza è vuoto

                ( //RENDERIZZO QUESTO
                    <span>PROVA A CERCARE QUALCOSA</span>
                ) : ( //ALTRIMENTI QUESTO

                    /* MOVIES LIST */
                    <>

                        <ul>
                            {moviesList.map(movie => ( //MAP PER CICLARE NELL'ARRAY RICAVATO DALLA FUNZIONE
                                <li key={movie.id}> <AppCard typeOfMedia={movie} /> </li>

                            ))}
                        </ul>

                        {/* TV SERIES LIST */}
                        <ul>
                            {seriesList.map(serie => (
                                <li key={serie.id}><AppCard typeOfMedia={serie} /></li>

                            ))}
                        </ul>

                    </>

                )

            }

        </main>
    )

}