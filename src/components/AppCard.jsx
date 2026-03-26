export default function AppCard({typeOfMedia}) {

    //DATA
    const imgPath = 'https://image.tmdb.org/t/p/'

    
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
            Voto: {Math.ceil(getNumberProp(typeOfMedia.vote_average))} <br />


            <div className="img-box">
                <img src={`${imgPath}w342${typeOfMedia.poster_path}`} alt="" />
            </div>
           
        </>
    )
}


