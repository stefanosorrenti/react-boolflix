export default function AppCardRating ({value}) { //Passo il valore in proporzione come props

    return (


        <>
            {/* Uso il render condizionale con AND per gestire quante stelline piene renderizzare in base al numero */}
             {value === 1 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
            )}

            {value === 2 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
            )}

            {value === 3 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>

                </ul>
            )}

             {value === 4 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star"></i></li>

                </ul>
            )}

             {value === 5 && 
            (
                <ul>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>

                </ul>
            )}

        </>
    )
}