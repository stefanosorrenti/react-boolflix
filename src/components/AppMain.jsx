//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"
import AppCard from "./AppCard"
import AppLoading from "./AppLoading"


export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { moviesList, seriesList, search } = useGlobal()

    
    
    return (
        <main>
            {/* DynamicRender */}

            {search === false ? //Se l'array che renderizza è vuoto

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
                            {seriesList.map(serie => ( //MAP PER CICLARE NELL'ARRAY RICAVATO DALLA FUNZIONE
                                <li key={serie.id}><AppCard typeOfMedia={serie} /></li>

                            ))}
                        </ul>

                    </>

                )

            }

            {search === true && moviesList.length === 0 && seriesList.length === 0 &&
            (   
              <AppLoading />
            )}

        </main>
    )

}