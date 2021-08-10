import { usePokemon } from '../hooks/usePokemon';

export const Prueba = () => {

    const { mostartAlerta, pokemons, mostartTarjetaPokemon, siguientePag, anteriorPag } = usePokemon();

    return (
        <>

            {
                // pokemons.map( pokemon => mostartTarjetaPokemon( pokemon ))
                pokemons.map(mostartTarjetaPokemon)
            }

            {
                mostartAlerta &&
                <div className="alert alert-warning" role="alert">
                    No hay pokemón D:
                </div>
            }

            <button className="btn btn-primary" onClick={anteriorPag} >
                Anteriores
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={siguientePag} >
                Siguientes
            </button>

            <br />
            <br />
        </>
    )
}
