import { useEffect } from "react"

import { useGlobal } from "../contexts/GlobalContext"

export default function AppLoading() {

    const { loading, setLoading } = useGlobal()
    //USE EFFECT
    useEffect(() => {

         const errorBanner = setTimeout(() => {
            setLoading(<span className="not-found-alert">Non ho trovato nulla.</span>)  
        }, 2000)

        return () => clearTimeout(errorBanner)
    }, [loading])
    return (

            loading
    )
}