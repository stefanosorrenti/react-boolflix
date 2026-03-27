//IMPORTS
import AppCardRating from "./AppCardRating"
import { useGlobal } from "../contexts/GlobalContext"
export default function AppCard({ typeOfMedia }) { //Aggiunfo props per rendere riutilizzabile la card sia con i filme che con le serie

    //USE STATE IMPORTATI
    const { renderMoviesInfo } = useGlobal()
    //DATA
    const imgPath = 'https://image.tmdb.org/t/p/'  //Variabile che contiene la path principale per cercare le immagini nell'api
    const ratingValue = Math.ceil((typeOfMedia.vote_average - 1) * (5 - 1) / (10 - 1) + 1) //Salvo in una variabile la proporzione della valutazione dei film, trasformandolo da 1/10 a 1/5
    const langunges = ['it', 'gb', 'en', 'fr', 'de', 'ro', 'es', 'ja']
    let langClass = ''

    langunges.map(lang => {
        if (lang === typeOfMedia.original_language.toLowerCase()) {
            console.log('UGUALE');
            langClass = lang

        } else {
            console.log('non uguale');

        }


    })


    return (


        <>
            {renderMoviesInfo ?
                (

                    <>
                        <ul className="movie-info">

                            {/* Titolo  */} 
                            <li>
                                <span className="fw-bold text-danger">Titolo:</span> {typeOfMedia.title}
                            </li>

                            /* Titol originale */
                            <li className="h6">
                                <span className="fw-bold text-danger">Titolo originale:</span> {typeOfMedia.original_title || typeOfMedia.original_name}
                            </li>


                            { /* Lingua */ }
                            <li> <span className="fw-bold text-danger">Lingua:  </span>
                                {typeOfMedia.original_language.toLowerCase() === langClass ?

                                    (
                                        <span class={typeOfMedia.original_language.toLowerCase() === 'en' ? 'fi fi-gb' : `fi fi-${langClass}`}></span>
                                    ) : (

                                        <span>{typeOfMedia.original_language.toUpperCase()}</span>
                                    )

                                }

                            </li>

                            { /* Valutazione */ }
                            <li>
                                <AppCardRating value={ratingValue} />
                            </li>

                        </ul>

                        <img src={`${imgPath}w342${typeOfMedia.poster_path}`} className="movies-cover" alt="cover image" />
                    </>

                ) : (

                    /* Movie Cover */

                    <img src={`${imgPath}w342${typeOfMedia.poster_path}`} className="movies-cover" alt="cover image" />


                )}





        </>
    )
}


