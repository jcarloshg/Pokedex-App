import { Pokemon, PokemonInfo } from '../interfaces/reqRes_PokeApi';

import { useState } from 'react';
import { pokemonApi } from '../api/poke-api';
import { useEffect } from 'react';
import { usePokemonInfo } from '../hooks/usePokemonInfo';

export const Tarjeta = (props: { pokemon: Pokemon }) => {

    const{mostrarInfo, info, mostrarPokemon} = usePokemonInfo(props.pokemon.url);

    const infoPokemon = () => {
        
    }

    return (
        <>
            <div className="card" style={{ margin: "9px" }} onClick={mostrarPokemon}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.pokemon.name}</h5>

                    {
                        mostrarInfo &&
                        // abilities, forms, moves
                        <p className="card-text"> {JSON.stringify(info, null, 2)}</p>
                    }
                </div>
            </div>
        </>
    )
}
