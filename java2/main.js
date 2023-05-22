
//registro
class Clientes {
    constructor( nombre, apellido, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
}

const clientetomas = new Clientes("tomas", "mondello", 45128376);
const clientevanina = new Clientes ("vanina","rios",29698198);

const arrayClientes = []

arrayClientes.push(clientetomas)
arrayClientes.push(clientevanina) 


function Registrate(){
let nombre= prompt("ingrese su nombre");
let apellido= prompt("ingrese su apellido");
let dni= parseInt(prompt("ingrese su dni"));
let cliente = new cliente(nombre , apellido, dni)
arrayClientes.push(cliente);
console.log(arrayClientes);
}
//comprobacion de registro

function consultaExistencia(){
    let dni = parseInt(prompt("ingrese el dni registrado"));
    let cliente= arrayClientes.find((cliente) => cliente.dni === dni);
    if(cliente.dni===dni){alert("estas registrado");}
}

//productos en stock

const productos =[
{id:1 , nombre: "Smart TV 4K UHD Samsung 55", Precio: 1000},
{id: 2, nombre: "Smart TV Philips 43", Precio: 20051},
{id: 3 , nombre: "Smart TV Philips 32", Precio:32516},
{id:4 , nombre: "Smart TV 40 TCL", Precio: 25154},
{id:5 , nombre: "Smart TV 4K 65", Precio: 56168},
{id: 6, nombre: "Smart TV LED 50 4K UHD RCA", Precio: 32656},
{id: 7 , nombre: "Celular Motorola G42 128GB Rosa Metálico", Precio:21544},
{id:8 , nombre: "Celular Samsung Galaxy A53 5G 128GB Negro", Precio: 25474},
{id:9 , nombre: "Xiaomi Redmi Note 11 128GB Negro", Precio: 12543},
{id: 10, nombre: "Celular Samsung Galaxy A04e 32GB Black", Precio: 35654},
{id: 11 , nombre: "Notebook Exo R33 14", Precio:65651},
{id:12, nombre: "Notebook Tecnobrand", Precio: 45654},
{id:13, nombre: "Tablet Lenovo Tab M8", Precio: 10202},
{id: 14, nombre: "Reloj Inteligente Mujer Smartwatch Nictom NT14", Precio: 7532},
{id: 15 , nombre: "Impresora Multifunción HP DeskJet Ink Advantage 2375", Precio:2465},
{id:16, nombre: "Auriculares High Electric TWS", Precio: 1000},
];

const arrayProductos= []
arrayProductos.push(productos)

function stock(){
encontrados.forEach((stock) => {
let mensaje = 
`ID: ${stock.id}
Nombre: ${stock.nombre}
Precio: $${stock.Precio}`;
alert(mensaje);
;
});
alert("¿quiere filtrar los productos en un rango de precios?")
}
//salir
function salir(){
    alert("gracias por contar con Mondello Store, esperamos que vuelva pronto.")
}

function menu(){
    alert("Binvenido a mondello store");
    let opcion = parseInt(prompt('que opcion desea elegir: \n 1) Registrate como usuario  \n 2) comprobar registro \n 3) Mira nuestros productos en stock  \n 4) salir'));
    return opcion;
} 
let opcion = menu();
switch(opcion){
    case 1:
        Registrate();
        breack;
    case 2:
        consultaExistencia();
        breack;
    case 3:
        stock();
        break;
    case 4:
        salir();
        break;
    default:
        alert("no marco ninguna opcion valida");
        break;
    
}