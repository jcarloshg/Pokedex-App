import { useEffect } from "react"
import { pokeApi } from "../api/poke-api"

export const Prueba = () => {

    useEffect(() => {
        pokeApi.get('/pokemon')
            .then(
                resp => {
                    console.log(resp.data.results);
                }
            )
            .catch(err => console.log);
    }, [])

    return (
        <>
            <h2>Prueba</h2>
        </>
    )
}
