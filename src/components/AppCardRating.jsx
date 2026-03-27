export default function AppCardRating ({value}) { //Passo il valore in proporzione come props

    return (


        <>
            {/* Uso il render condizionale con AND per gestire quante stelline piene renderizzare in base al numero */}
             {value === 1 && 
            (
                <ul className = "d-flex justify-content-center fs-3" > 
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                </ul>
            )}

            {value === 2 && 
            (
                <ul className = "d-flex justify-content-center fs-3" >
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                </ul>
            )}

            {value === 3 && 
            (
                <ul className = "d-flex justify-content-center fs-3" >
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>

                </ul>
            )}

             {value === 4 && 
            (
                <ul className = "d-flex justify-content-center fs-3">  
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star"></i></li>

                </ul>
            )}

             {value === 5 && 
            (
                <ul className = "d-flex justify-content-center fs-3" > 
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>
                    <li><i class="text-warning bi bi-star-fill"></i></li>

                </ul>
            )}

        </>
    )
}