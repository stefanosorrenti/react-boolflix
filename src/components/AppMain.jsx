//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"

export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { moviesList, seriesList } = useGlobal()


    //DATA  
    const imgPath = 'https://image.tmdb.org/t/p/'

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
                                <li key={movie.id}>

                                    {movie.title} <br />
                                    Titolo originale: {movie.original_title}  <br />
                                    Lingua:
                                    <span
                                        //Gestisco con un condizionale il render delle icone.
                                        className={movie.original_language == 'en' ? 'fi fi-gb' : `fi fi-${movie.original_language.toLowerCase()}`}

                                    >
                                    </span> <br />
                                    Voto: {movie.vote_average.toFixed(1)} <br />


                                    <div className="img-box">
                                        <img src={`${imgPath}w342${movie.poster_path}`} alt="" />
                                    </div>



                                </li>



                            ))}
                        </ul>

                        {/* TV SERIES LIST */}
                        <ul>
                            {seriesList.map(serie => (
                                <li key={serie.id}>
                                    Titolo Originale: {serie.original_name} <br />
                                    Lingua:
                                    <span

                                        className={serie.original_language == 'en' ? 'fi fi-gb' : `fi fi-${serie.original_language.toLowerCase()}`}

                                    >
                                    </span> <br />

                                    Voto: {serie.vote_average.toFixed(1)}

                                      <div className="img-box">
                                        <img src={`${imgPath}w342${serie.poster_path}`} alt="" />
                                    </div>

                                </li>

                            ))}
                        </ul>

                    </>

                )

            }

        </main>
    )

}