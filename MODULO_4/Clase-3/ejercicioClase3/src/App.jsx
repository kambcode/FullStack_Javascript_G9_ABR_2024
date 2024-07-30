import './App.css'
import { Descripcion } from './components/descripcion/descripcionComponent'
import { Imagen } from './components/imagen/imagenComponent'
import { Nombre } from './components/nombre/nombreComponents'


function App() {

  return (
    <div className='card'>
      <Imagen />
      <Nombre name='rick'/>
      <Descripcion descripcion='hola como estas'/>
    </div>
  )
}

export default App
