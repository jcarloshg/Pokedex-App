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

    const infoPokemon = () => {

        let habilidades = '';
        info?.abilities.forEach(abilities => habilidades += abilities.ability.name + ', ')

        let formas = '';
        info?.forms.forEach(forms => formas += forms.name + ', ');

        let movimientos = '';
        info?.moves.forEach(moves => movimientos += moves.move.name + ', ');


        return (
            <p className="card-text">
                <h6>ID</h6>{info?.id}
                <br /><br /><br />
                <h6>Formas</h6>{formas}
                <br /><br /><br />
                <h6>Habilidades</h6>{habilidades}
                <br /><br /><br />
                <h6>Otras caracteristicas</h6>{info?.height}m | {info?.weight}kg
                <br /><br /><br />
                <h6>Movimientos</h6>{movimientos}
            </p>
        )
    }

    return {
        mostrarInfo,
        info,
        mostrarPokemon,
        infoPokemon
    }
}
