
import { useEffect, useState } from 'react';
import { pokeApi } from '../api/poke-api';
import { Pokemon, ReqRes_PokeApi } from '../interfaces/reqRes_PokeApi';
import { Tarjeta } from '../typescript/Tarjeta';

export const usePokemon = () => {

    const [mostartAlerta, setMostartAlerta] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        cargarPokemons();
    }, []);

    const cargarPokemons = async () => {

        const resp = await pokeApi.get<ReqRes_PokeApi>('/pokemon');
        const pokemonsArr = resp.data.results;

        if (pokemonsArr.length === 0) {
            setMostartAlerta(true);
        } else {
            setPokemons(pokemonsArr);
        }

    }

    const mostartTarjetaPokemon = (pokemon: Pokemon) => {
        return (
            <Tarjeta pokemon={pokemon} key={pokemon.name} />
        );
    }

    return {
        mostartAlerta,
        pokemons,
        mostartTarjetaPokemon
    }
}
