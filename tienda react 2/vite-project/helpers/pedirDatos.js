import { Productos } from "../data/PRODUCT_DATA.JS"

export const pedirDatos = () =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 2000)
    })
}