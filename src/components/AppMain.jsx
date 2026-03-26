//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"

export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { render } = useGlobal()


    return (
        <main>
            {/* DynamicRender */}

            {render.length === 0 ? //Se l'array che renderizza è vuoto

                ( //RENDERIZZO QUESTO
                    <span>PROVA A CERCARE QUALCOSA</span>
                ) : ( //ALTRIMENTI QUESTO

                    /* MOVIES LIST */
                    <ul>
                        {render.results.map(movie => ( //MAP PER CICLARE NELL'ARRAY RICAVATO DALLA FUNZIONE
                            <li>

                                {movie.title} <br />
                                Titolo originale: {movie.original_title} <br />
                                Lingua:
                                <span
                                    //Gestisco con un condizionale il render delle icone.
                                    class={movie.original_language == 'en' ? 'fi fi-gb' : `fi fi-${movie.original_language.toLowerCase()}`}

                                >
                                </span> <br />
                                Voto: {movie.vote_average.toFixed(1)}


                            </li>
                        ))}
                    </ul>

                )

            }

        </main>
    )

}