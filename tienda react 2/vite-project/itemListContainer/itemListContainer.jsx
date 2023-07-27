import { useEffect, useState } from 'react'
import {pedirDatos} from '../helpers/pedirDatos' 
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer= () => {
    const[Productos,setProductos]= useState([])

    useEffect(() =>{
    pedirDatos()
    .then((res) =>{
        setProductos(res)
    })
    }, [])

return(
    <div className="catalogo__contenedor">
        <h2>lista de productos</h2>
        <hr />
        <div className= 'row'>
            {
                Productos.map((prod)=>(
                    <div key={prod.id} className='col-3 m-2'>
                    <h4>{prod.nombre}</h4>
                    <img className="imagen" src={prod.img} alt={prod.nombre}/>
                    <p>{prod.descripcion}</p>
                    <p>{prod.precio}</p>
                    <button className='btn btn-primary'>comprar</button>

                    </div>
                ))
            }
            </div>
    </div>
)
}
export default ItemListContainer