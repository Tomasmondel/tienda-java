const stock=[
    {id:1 , nombre: "Smart TV 4K UHD Samsung 55", Precio: 1000},
    {id: 2, nombre: "Smart TV Philips 43", Precio: 20051},
    {id: 3 , nombre: "Smart TV Philips 32", Precio:32516},
    {id:4 , nombre: "Smart TV 40 TCL", Precio: 25154},
    {id:5 , nombre: "Smart TV 4K 65", Precio: 56168},
    {id: 6, nombre: "Smart TV LED 50 4K UHD RCA", Precio: 32656},
    {id: 7 , nombre: "Celular Motorola G42 128GB Rosa Metálico", Precio:21544},
    {id: 8 , nombre: "Celular Samsung Galaxy A53 5G 128GB Negro", Precio: 25474},
    {id: 9 , nombre: "Xiaomi Redmi Note 11 128GB Negro", Precio: 12543},
    {id: 10, nombre: "Celular Samsung Galaxy A04e 32GB Black", Precio: 35654},
    {id: 11 , nombre: "Notebook Exo R33 14", Precio:65651},
    {id:12, nombre: "Notebook Tecnobrand", Precio: 45654},
    {id:13, nombre: "Tablet Lenovo Tab M8", Precio: 10202},
    {id: 14, nombre: "Reloj Inteligente Mujer Smartwatch Nictom NT14", Precio: 7532},
    {id: 15 , nombre: "Impresora Multifunción HP DeskJet Ink Advantage 2375", Precio:2465},
    {id:16, nombre: "Auriculares High Electric TWS", Precio: 1000},
    ];
    let contenedor= document.getElementById("contenedor")

    stock.forEach(item=>{
    let div = document.createElement("div1");
    div.innerHTML=`
    <h2>id:${item.id}</h2>
    <p>nombre:${item.nombre}</p>
    <b>precio:${item.Precio}</p>
    <button id="botonC" type="submit">Agregar al carrito</button>
    <button id="botonB" type="submit">Eliminar del carrito</button>
    <hr />
    `
    contenedor.append(div);
    })
    let boton= document.getElementById("botonC");
    let botonB= document.getElementById("botonB");
    
    //const productos=[]
   // if(boton.addEventListener("click", () =>{ Arrayproductos.push(`${item.id},${item.nombre},${item.Precio}`)}))
   // if( boton.addEventListener("click")){
     //   Arrayproductos.push(`${item.id},${item.nombre},${item.Precio}`)
    //}
    
    /*localStorage.setItem("productos", JSON.stringify(productos))
    console.log(localStorage.productos)

    let carrito=[]
    let carritoStorge = localStorage.getItem("carrito")
    
    
    const guardar=(clave, valor)=>{localStorage.setItem(clave,valor)};
    productos.forEach(item=>{
    guardar(item.id, JSON.stringify(item))
    })*/


