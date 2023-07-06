import { Header } from '../../header/header'
import { Productos } from '../../itemListContainer/itemListContainer'
import './App.css'
function App() {


  return (
  <>
  <div>
    <Header/>
  <Productos id={1} nombre="Producto: Smart TV 4K UHD Samsung 55" precio="precio:1000"/>
  <hr />
  <Productos id={2} nombre="Producto: Smart TV Philips 43" precio="precio:1000"/>
  <hr />
  <Productos id={3} nombre="Producto: Celular Motorola G42 128GB Rosa Metálico" precio="precio:1000"/>
  <hr />
  <Productos id={4} nombre="Producto: Xiaomi Redmi Note 11 128GB Negro" precio="precio:1000"/>
  <hr />
  <Productos id={5} nombre="Producto: Notebook Exo R33 14" precio="precio:1000"/>
  <hr />
  <Productos id={6} nombre="Producto: Tablet Lenovo Tab M8" precio="precio:1000"/>
  <hr />
  <Productos id={7} nombre="Producto: Reloj Inteligente Mujer Smartwatch Nictom NT14" precio="precio:1000"/>
  <hr />
  </div>
 
 
</>
  )
}

export default App
