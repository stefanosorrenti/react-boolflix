export default function AppCard({typeOfMedia}) {

    //DATA
    const imgPath = 'https://image.tmdb.org/t/p/'
    const ratingValue = Math.ceil((typeOfMedia.vote_average - 1) * (5 - 1) / (10 - 1) + 1) 
    
    //FUNCTIONS 
    function getNumberProp (value) {
        return (value - 1) * (5 - 1) / (10 - 1) + 1

    }
    return (

        <>
            {typeOfMedia.title} <br />
            Titolo originale: {typeOfMedia.original_title || typeOfMedia.original_name}  <br />
            Lingua:
            <span
                //Gestisco con un condizionale il render delle icone.
                className={typeOfMedia.original_language == 'en' ? 'fi fi-gb' : `fi fi-${typeOfMedia.original_language.toLowerCase()}`}

            >
            </span> <br />
            Voto: {ratingValue} <br />
            {ratingValue === 1 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
            )}

            {ratingValue === 2 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
            )}

            {ratingValue === 3 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>

                </ul>
            )}

             {ratingValue === 4 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>

                </ul>
            )}

             {ratingValue === 5 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>

                </ul>
            )}

            <div className="img-box">
                <img src={`${imgPath}w342${typeOfMedia.poster_path}`} alt="" />
            </div>
           
        </>
    )
}


