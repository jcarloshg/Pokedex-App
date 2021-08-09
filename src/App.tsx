import { Tarjeta } from './typescript/Tarjeta';
import { Prueba } from './components/Prueba';



const App = () => {
  return (
    <div className="mt-2">
      <h1>Poke-Dex</h1>
      <hr />
      <Tarjeta/>
      <Prueba/>
    </div>
  )
}

export default App;