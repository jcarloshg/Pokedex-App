import { useEffect, useState } from "react";
import { pokemonApi } from "../api/poke-api";
import { PokemonInfo } from "../interfaces/reqRes_PokeApi";


export const usePokemonInfo = (url: string) => {

    const [mostrarInfo, setMostrarInfo] = useState(false)
    const [info, setInfo] = useState<PokemonInfo>();

    useEffect(() => {
        cargarInfo();
    }, [])

    const cargarInfo = async () => {
        const rest = await pokemonApi(url).get('');
        setInfo(rest.data);
    }

    const mostrarPokemon = () => {
        (mostrarInfo) ? setMostrarInfo(false) : setMostrarInfo(true);
    }

    return {
        mostrarInfo,
        info,
        mostrarPokemon
    }
}
