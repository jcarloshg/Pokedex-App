import { usePokemon } from '../hooks/usePokemon';

export const Prueba = () => {

    const { mostartAlerta, pokemons, mostartTarjetaPokemon } = usePokemon();

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
        </>
    )
}
