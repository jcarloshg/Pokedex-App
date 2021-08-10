import { usePokemon } from '../hooks/usePokemon';

export const Prueba = () => {

    const { mostartAlerta, pokemons, mostartTarjetaPokemon } = usePokemon();

    return (
        <>
            <div className="grid">
                {
                    // pokemons.map( pokemon => mostartTarjetaPokemon( pokemon ))
                    pokemons.map(mostartTarjetaPokemon)
                }
            </div>

            

            {
                mostartAlerta &&
                <div className="alert alert-warning" role="alert">
                    No hay pokemón D:
                </div>
            }
        </>
    )
}
