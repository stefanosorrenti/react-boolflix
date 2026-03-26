//IMPORTS
import AppCardRating from "./AppCardRating"

export default function AppCard({typeOfMedia}) { //Aggiunfo props per rendere riutilizzabile la card sia con i filme che con le serie

    //DATA
    const imgPath = 'https://image.tmdb.org/t/p/'  //Variabile che contiene la path principale per cercare le immagini nell'api
    const ratingValue = Math.ceil((typeOfMedia.vote_average - 1) * (5 - 1) / (10 - 1) + 1) //Salvo in una variabile la proporzione della valutazione dei film, trasformandolo da 1/10 a 1/5
    
     
    
    return (

        /* Costruisco la card */
        <>
            {typeOfMedia.title} <br />
            Titolo originale: {typeOfMedia.original_title || typeOfMedia.original_name}  <br /> {/* Dato che ho due chiavi diverse nelle mie chiamate uso l'operatore OR */}
            Lingua:
            <span
                //Gestisco con un condizionale il render delle icone.
                className={typeOfMedia.original_language == 'en' ? 'fi fi-gb' : `fi fi-${typeOfMedia.original_language.toLowerCase()}`}

            >
            </span> <br />
            Voto: <AppCardRating value ={ratingValue} /> <br /> {/* Inserisco il mio numero in proporzione nel componente per visualizzare le stelline */}
           

            <div className="img-box">
                <img src={`${imgPath}w342${typeOfMedia.poster_path}`} alt="" /> {/* Ricompongo la src di ogni rispettiva immagine. */}
            </div>
           
        </>
    )
}


