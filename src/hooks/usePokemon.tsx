
import { useEffect, useState } from 'react';
import { pokeApi } from '../api/poke-api';
import { Pokemon, ReqRes_PokeApi } from '../interfaces/reqRes_PokeApi';
import { Tarjeta } from '../typescript/Tarjeta';

const NUM_ITEMS_PAG = 10;

export const usePokemon = () => {

    const [mostartAlerta, setMostartAlerta] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    const [offset, setoffset] = useState(0);
    const [limit, setlimit] = useState(10);

    useEffect(() => {
        cargarPokemons();
    }, []);

    const cargarPokemons = async () => {

        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

        console.log("asdfasdfasd", offset, limit);
        

        const resp = await pokeApi(url).get<ReqRes_PokeApi>('/pokemon');
        const pokemonsArr = resp.data.results;

        if (pokemonsArr.length === 0) {
            setMostartAlerta(true);
        } else {
            setPokemons(pokemonsArr);
        }

    }

    const siguientePag = () => {
        setoffset(offset + NUM_ITEMS_PAG);
        setlimit(limit + NUM_ITEMS_PAG);

        cargarPokemons();
    }

    const anteriorPag = () => {
        setoffset(offset - NUM_ITEMS_PAG);
        setlimit(limit - NUM_ITEMS_PAG);

        cargarPokemons();
    }

    const mostartTarjetaPokemon = (pokemon: Pokemon) => {
        return (
            <Tarjeta pokemon={pokemon} key={pokemon.name} />
        );
    }

    return {
        mostartAlerta,
        pokemons,
        mostartTarjetaPokemon,
        siguientePag,
        anteriorPag
    }
}
