import { Pokemon } from '../interfaces/reqRes_PokeApi';

import { usePokemonInfo } from '../hooks/usePokemonInfo';

export const Tarjeta = (props: { pokemon: Pokemon }) => {

    const { mostrarInfo, info, mostrarPokemon, infoPokemon } = usePokemonInfo(props.pokemon.url);

    return (
        <>
            <div className="card" style={{ margin: "9px" }} onClick={mostrarPokemon}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.pokemon.name}</h5>

                    {
                        mostrarInfo &&
                        //  moves
                        infoPokemon()
                    }
                </div>
            </div>
        </>
    )
}
