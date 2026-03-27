//IMPORTS
import { useGlobal } from "../contexts/GlobalContext"
import AppCard from "./AppCard"
import AppLoading from "./AppLoading"
import AppBanner from "./AppBanner"

export default function AppMain() {
    //USE STATE (IMPORTATI DA CUSTOM HOOK)
    const { moviesList, seriesList, search } = useGlobal()


    return (
        <main>
            {/* DynamicRender */}
            <div className="container">

                {search === false ? //Se l'array che renderizza è vuoto
                    //RENDERIZZO QUESTO
                    (<AppBanner />)

                    :

                    ( //ALTRIMENTI QUESTO

                        /* RENDER LIST */
                        <section className="text-white mt-5">

                            {/* MOVIES LIST */}
                            <div className="row text-white gy-4">
                                {moviesList.map(movie => ( //MAP PER CICLARE NELL'ARRAY RICAVATO DALLA FUNZIONE
                                    <div className="col-12 col-md-4 col-lg-3 movie-card" key={movie.id} onMouseEnter={() => setRenderMoviesInfo(true)} onMouseLeave={() => setRenderMoviesInfo(false)} > <AppCard typeOfMedia={movie} /> </div>

                                ))}
                            </div>

                            {/* TV SERIES LIST */}
                            <div className="row g-4">
                                {seriesList.map(serie => ( //MAP PER CICLARE NELL'ARRAY RICAVATO DALLA FUNZIONE
                                    <div className="col-12 col-md-4 col-lg-3 movie-card" key={serie.id}><AppCard typeOfMedia={serie} /> </div>

                                ))}
                            </div>

                        </section>

                    )

                }

                {search === true && moviesList.length === 0 && seriesList.length === 0 &&
                    (
                        <AppLoading />
                    )}

            </div>

        </main>
    )

}