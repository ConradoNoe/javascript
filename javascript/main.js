// 

// function edad() {
//     let edadIngresada = parseInt(prompt("Ingresa tu edad"));
//     if (edadIngresada < 18) {
//         alert("Eres menor de edad y no puedes realizar esta operación");
//         console.log("el usuario es menor de edad se cancela la operacion")
//         return false;
//     } else {
//         return true;
//     }
// }
// const TipoDeMoneda = function (tipo, valor, stock) {
//     this.tipo = tipo;
//     this.valor = valor;
//     this.stock = stock;
// };

// let moneda = new TipoDeMoneda("dolar", 1060, 1000000);
// let moneda1 = new TipoDeMoneda("euro", 1170, 50000);
// let moneda2 = new TipoDeMoneda("real", 220, 2000000);
// let moneda3 = new TipoDeMoneda("libra", 1485, 10000);
// let moneda4 = new TipoDeMoneda("riyadh", 900, 8000);
// let moneda5 = new TipoDeMoneda("franco", 1200, 30000);

// let distintasMonedas = [moneda, moneda1, moneda2, moneda3, moneda4, moneda5];

// function disponibilidadDeMoneda() {
//     let MonedaACambiar = prompt("Ingresa qué moneda quieres cambiar").toLowerCase();
//     let resultado = distintasMonedas.filter((monedaAcambiar) => monedaAcambiar.tipo.toLowerCase().includes(MonedaACambiar)); 
//     if (resultado.length > 0) { 
//         console.table(resultado);
//     }else {
//         alert("Tu moneda a cambiar no está disponible en este momento");
//     }
// }

// bienvenido();
// disponibilidadDeMoneda();


// let dolar = 1070
// let euro = 1200
// let real = 300 

// function calcularCambio() {
//     let dineroacambiar = prompt("ingresa cuando dinero queres cambiar")
//     let comisioncueva = 0.5
//     let resultado = dineroacambiar / euro
//     alert(resultado)
// }

// calcularCambio()


// Entrega piola

// crear variable como carrito para almacenar objetos
// crear un descuento aleatorio que lo puedan utilizar en su o sus productos elegidos
// filtrar producto con palabra clave



// const Producto = function  ( tipo, marca, tamanio, precio, litros, ){
//     this.tipo = tipo
//     this.marca = marca
//     this.tamanio = tamanio
//     this.precio = precio
//     this.litros = litros
// } 
// //productos

// let tabla1 = new Producto("tabla" ,"pyzel" ,5.11 ,700 ,30)
// let tabla2 = new Producto("tabla" ,"all merrik" ,5.11 ,900 ,28)
// let tabla3 = new Producto("tabla" ,"pyzel" ,5.12 ,1000 ,29)
// let tabla4 = new Producto("tabla" ,"pyzel" ,5.9 ,1000 ,29)
// let tabla5 = new Producto("tabla" ,"lost" ,6.0 ,1200 ,29)
// let tabla6 = new Producto("tabla" ,"camaron brujo" ,6.0 ,600 ,30)
// let traje1 = new Producto("traje de agua" ,"billabong" ,"MT" ,300)
// let traje2 = new Producto("traje de agua" ,"quicksilver" ,"LT" ,350)
// let traje3 = new Producto("traje de agua" ,"oneill" ,"L" ,350)
// let traje4 = new Producto("traje de agua" ,"supercell" ,"M" ,280)
// let traje5 = new Producto("traje de agua" ,"billabong" ,"L" ,350)
// let traje6 = new Producto("traje de agua" ,"oneill" ,"XL" ,400)

//lista de productos en array


// let lista = [tabla1, tabla2, tabla3, tabla4, tabla5, tabla6, traje1, traje2, traje3, traje4, traje5, traje6]





// function BuscarProducto(){
//     let palabraClave = prompt("que estas buscando?").trim().toLowerCase()
//     let resultadoDeBusqueda = lista.filter((x)=> x.tipo.toLowerCase().includes(palabraClave))
//     if(resultadoDeBusqueda.length > 0){
//         console.table(resultadoDeBusqueda)
//     }else{
//         console.log("tu articulo no se encuentra en este mercado")
//     }
// }


// console.table(lista)

// BuscarProducto()
























// function ingreso() {
//     let nombreingresado = prompt("ingresa tu nombre")
//     let apellidoingresado = prompt ("ingresa tu apellido")
//     let nombreyApellido = nombreingresado + apellidoingresado
//     let edadIngresada = parseInt(prompt("Ingresa tu edad"));
//     if (edadIngresada < 18) {
//         alert("Eres menor de edad y no puedes realizar esta operación");
//         console.log("el usuario es menor de edad se cancela la operacion")
//         return false;
//     } else {
//         alert("bienvenido " + nombreyApellido)
//         return true;
//     }
// }
// // let boton = document.getElementById("boton1")
// // boton.addEventListener("click",ingreso)

// //let titulo = document.getElementById("titulo")

let productos = [
    //tablas
        {id: 1, tipo: "tabla", marca:"pyzel", medida:"6.0", precio:700},
        {id: 2, tipo: "tabla", marca:"uva surf", medida:"6.0", precio:600},
        {id: 3, tipo: "tabla", marca:"all merrik", medida:"5.11", precio:800},
        {id: 4, tipo: "tabla", marca:"pyzel", medida:"5.9", precio:1000},
        {id: 5, tipo: "tabla", marca:"lost", medida:"6.3", precio:900},
        {id: 6, tipo: "tabla", marca:"lost", medida:"6.0", precio:1200},
        {id: 7, tipo: "tabla", marca:"camaron brujo", medida:"5.10", precio:600},
    //trajes de neoprene
        {id: 8, tipo: "traje de neoprene", marca:"vans", medida:"3.2", precio:280},
        {id: 9, tipo: "traje de neoprene", marca:"ripcurl", medida:"4.3", precio:200},
        {id: 10, tipo: "traje de neoprene", marca:"quicksilver", medida:"3.2", precio:350},
        {id: 11, tipo: "traje de neoprene", marca:"billabong", medida:"3.2", precio:400},
        {id: 12, tipo: "traje de neoprene", marca:"volcom", medida:"4.3", precio:300},
    //quillas
        {id: 13, tipo: "quillas", marca:"fcs", medida:"medium", precio:120},
        {id: 14, tipo: "quillas", marca:"twin fin", medida:"short", precio:100},
        {id: 15, tipo: "quillas", marca:"fcs", medida:"large", precio:130},
    //leashes
        {id: 16, tipo: "pita", marca:"quicksilver", medida:"mt", precio:80},
        {id: 17, tipo: "pita", marca:"ripcurl", medida:"xl", precio:40},
]


// for (const producto of productos){
//         let contenedor = document.createElement("div")
//         contenedor.innerHTML = `
//         <h2> ${producto.tipo} </h2>
//         <p> ${producto.marca} </p>
//         <b> ${producto.precio} usd </b>
//         `
//         document.body.appendChild(contenedor)
// }

// const guardarlocal = (clave, valor) => {localStorage.setItem(clave,valor)}
// // almacenar produ to por producto

// for(const x of productos){
//     guardarlocal(x.id, JSON.stringify(x))
// }

// // almacenar array completo
// guardarlocal("listaproductos",JSON.stringify(productos))

//recorrer un objeto del local storage
// for (let i = 0; i < localStorage.length; i++){
//     let clave = localStorage.key(i)
//     console.log("clave: " + clave)
//     console.log("valor: "+ localStorage.getItem(clave))
// }





// sessionStorage.setItem("contraseña: ", "kalama2002")
// sessionStorage.removeItem("contraseña: ")




//formulario

// const inputnombre = document.querySelector("#nombre")
// const inputapellido = document.querySelector("#apellido")
// const inputedad = document.querySelector("#edad")
// const inputemail = document.querySelector("#email")
// const botonEnviar = document.querySelector("#botonEnviar")
// const botonTraer = document.querySelector("#botonTraer")


// botonenviar.addEventListener("click", guardarForm)

// function guardarForm() {
//     const datosDelUsuario = {
//         nombre: inputnombre.value,
//         apellido: inputapellido.value,
//         edad: inputedad.value,
//         email: inputemail.value 
//     }
//     let resultado = JSON.stringify(datosDelUsuario)
//     localStorage.setItem("datosForm", resultado)
//     console.log(resultado)
//     alert("ya se guardaron los datos en el storage")
// }


// guardarForm()



// const inputNombre = document.querySelector("#nombre")
// const inputEdad = document.querySelector("#edad")
// const inputEmail = document.querySelector("#email")
// const botonEnviar = document.querySelector("#guardar")
// const botonTraer = document.querySelector("#traer")


// botonEnviar.addEventListener("click", guardarFormulario)

// function guardarFormulario(){
//     const datosDelFormulario={
//         nombre:inputNombre.value,
//         edad:inputEdad.value,
//         email:inputEmail.value
//     }
//     let resultado = JSON.stringify(datosDelFormulario)          
//     localStorage.setItem("datosForm", resultado)
//     console.log(resultado)
//     alert("ya se guardaron los datos en el storage")
// }

// function cargarFormulario(){

//     const formulario = document.getElementById("miFormulario")
//     const datosJSON = localStorage.getItem("datosForm")


//     if(datosJSON){
//         const datosDelFormulario = JSON.parse(datosJSON)
//         formulario.nombre.value = datosDelFormulario.nombre
//     }
//     }

    // const edad = 15

    // if(edad >= 18){
    //     alert("podes comprar alcohol")
    // }else{
    //     alert("no podes comprar sos menos de 18 años")
    // }


    // operador ternario ?


    // let mensaje = edad >= 18?"podes comprar alcohol": "no podes comprar sos menos de 18 años"
    // console.log(mensaje)

    // carrito = []

    // if (carrito.length === 0){
    //     console.log("el carrito esta vacio")
    // }
    //con operador and

    // carrito.length === 0 && console.log("el carrito esta vacio")



// let carrito = [];

// let productos = [
//     //tablas
//         {tipo: "tabla", marca:"pyzel", medida:"6.0", precio:700},
//         {tipo: "tabla", marca:"uva surf", medida:"6.0", precio:600},
//         {tipo: "tabla", marca:"all merrik", medida:"5.11", precio:800},
//         {tipo: "tabla", marca:"pyzel", medida:"5.9", precio:1000},
//         {tipo: "tabla", marca:"lost", medida:"6.3", precio:900},
//         {tipo: "tabla", marca:"lost", medida:"6.0", precio:1200},
//         {tipo: "tabla", marca:"camaron brujo", medida:"5.10", precio:600},
//     //trajes de neoprene
//         {tipo: "traje de neoprene", marca:"vans", medida:"3.2", precio:280},
//         {tipo: "traje de neoprene", marca:"ripcurl", medida:"4.3", precio:200},
//         {tipo: "traje de neoprene", marca:"quicksilver", medida:"3.2", precio:350},
//         {tipo: "traje de neoprene", marca:"billabong", medida:"3.2", precio:400},
//         {tipo: "traje de neoprene", marca:"volcom", medida:"4.3", precio:300},
//     //quillas
//         {tipo: "quillas", marca:"fcs", medida:"medium", precio:120},
//         {tipo: "quillas", marca:"twin fin", medida:"short", precio:100},
//         {tipo: "quillas", marca:"fcs", medida:"large", precio:130},
//     //leashes
//         {tipo: "pita", marca:"quicksilver", medida:"mt", precio:80},
//         {tipo: "pita", marca:"ripcurl", medida:"xl", precio:40},
// ]





// entrega 3


const inputNameForm = document.getElementById("nameForm")
const inputUserForm = document.getElementById("userForm")
const inputEmailForm = document.getElementById("emailForm")
const inputPasswordForm = document.getElementById("passwordForm")
const inputButtonForm = document.getElementById("sendData")
const DatosTerminados = document.getElementById("datosGuardadosBien")

//agregamos evento click a boton para enviar datos 
inputButtonForm.addEventListener("click", function(){
    let DatosDelForm = {
        nombre: inputNameForm.value,
        usuario: inputUserForm.value,
        email: inputEmailForm.value,
        contrasenia: inputPasswordForm.value,
    }
    if (Object.values(DatosDelForm).some(value => !value.trim())) {
        alert("Por favor, complete todos los campos correctamente");
        return;
    }else{
        alert("los datos han sido guardados correctamente")
    }
    DatosTerminados.innerHTML = "bienvenido " + DatosDelForm.nombre + "tus datos han sido guardados correctamente" 
    let resultado = JSON.stringify(DatosDelForm)          
    localStorage.setItem("DatosDelForm", resultado)  
})


















const Producto = function(tipo,marca,tamanio,precio){
        this.tipo = tipo,
        this.marca = marca
        this.tamanio = tamanio,
        this.precio = precio
}

let producto1 = new Producto("tabla","oneil",6.0 + "fts",700 + "usd")
let producto2 = new Producto("tabla","oneil",6.0 + "fts",700 + "usd")
let producto3 = new Producto("traje de neoprene","oneil",6.0 + "fts",700 + "usd")
let producto4 = new Producto("traje de neoprene","oneil",6.0 + "fts",700 + "usd")
let producto5 = new Producto("quillas","oneil",6.0 + "fts",700 + "usd")
let producto6 = new Producto("quillas","oneil",6.0 + "fts",700 + "usd")

let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

function BuscarProducto () {
    const body = document.querySelector("body")
    const input = document.getElementById("BuscarProducto").value // traigo el valor del input
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((producto) => producto.tipo.toUpperCase().includes(palabraClave))
    if(resultado.length > 0){
        const container = document.createElement("div")
        container.classList.add("container")// lo agrego a una clae para poder editarlo

        resultado.forEach((producto) => {
            const card = document.createElement("div")
            card.classList.add("card-carrito")

        const tipo = document.createElement("h2")
        tipo.textContent = producto.tipo
        card.appendChild(tipo)

        const marca = document.createElement("p")
        marca.textContent = producto.marca
        card.appendChild(marca)

        const tamanio = document.createElement("p")
        tamanio.textContent = producto.tamanio
        card.appendChild(tamanio)

        const precio = document.createElement("p")
        precio.textContent = producto.precio
        card.appendChild(precio)


        container.appendChild(card)
        })
        body.appendChild(container)
    }else{
        alert("no podemos encontrar este articulo en este momento")
    }
}

const filtrarBoton = document.getElementById("filtrar")


filtrarBoton.addEventListener("click", BuscarProducto)



// Agrega el nuevo producto al array
// Limpiar los campos del formulario después de agregar el producto


