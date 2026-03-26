//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"

export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { render } = useGlobal()


    return (
        <main>
            {/* DynamicRender */}

            {render.length === 0 ?

                (
                    <span>PROVA A CERCARE QUALCOSA</span>
                ) : (

                    <ul>
                        {render.results.map(movie => (
                            <li>

                                {movie.title} <br />
                                Titolo originale: {movie.original_title} <br />
                                Lingua:{movie.original_language}
                                <span

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