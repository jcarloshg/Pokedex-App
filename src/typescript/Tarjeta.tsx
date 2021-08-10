import { Pokemon } from '../interfaces/reqRes_PokeApi';

export const Tarjeta = (props: { pokemon: Pokemon }) => {

    return (
        <>
            <div className="card" style={{margin: "9px"}} >
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.pokemon.name}</h5>
                    {/* <p className="card-text"> {props.pokemon.url}</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
}
