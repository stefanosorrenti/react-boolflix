//IMPORTS
import AppCardRating from "./AppCardRating"

export default function AppCard({ typeOfMedia }) { //Aggiunfo props per rendere riutilizzabile la card sia con i filme che con le serie

    //DATA
    const imgPath = 'https://image.tmdb.org/t/p/'  //Variabile che contiene la path principale per cercare le immagini nell'api
    const ratingValue = Math.ceil((typeOfMedia.vote_average - 1) * (5 - 1) / (10 - 1) + 1) //Salvo in una variabile la proporzione della valutazione dei film, trasformandolo da 1/10 a 1/5



    return (
        <>

            <ul className="movie-info position-relative z-1">

                {/* Titolo */}
                <li>
                    <span className="fw-bold text-danger">Titolo:</span> {typeOfMedia.title}
                </li>

                {/* Titol originale */}
                <li className="h6">
                    <span className="fw-bold text-danger">Titolo originale:</span> {typeOfMedia.original_title || typeOfMedia.original_name}
                </li>

                {/* Valutazione */}
                <li>
                    <AppCardRating value={ratingValue} />
                </li>

            </ul>
            {/* Movie Cover */}
            <img src={`${imgPath}w342${typeOfMedia.poster_path}`} className="movies-cover" alt="cover image" />



        </>
    )
}


