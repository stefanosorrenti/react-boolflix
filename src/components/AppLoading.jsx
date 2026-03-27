import { useEffect, useState } from "react"
import { Riple } from "react-loading-indicators"
import { useGlobal } from "../contexts/GlobalContext"

export default function AppLoading() {

    const { loading, setLoading } = useGlobal()
    //USE EFFECT
    useEffect(() => {

         const errorBanner = setTimeout(() => {
            setLoading(<span>Non ho trovato nulla.</span>)  
        }, 2000)

        return () => clearTimeout(errorBanner)
    }, [loading])
    return (

            loading
    )
}