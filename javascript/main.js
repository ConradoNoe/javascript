 // entrega 3
//formulario con guardado en local storage
const iniciarForm = document.getElementById("iniciar-form")
const inputNameForm = document.getElementById("nameForm")
const inputUserForm = document.getElementById("userForm")
const inputEmailForm = document.getElementById("emailForm")
const inputPasswordForm = document.getElementById("passwordForm")
const inputButtonForm = document.getElementById("sendData")
const DatosTerminados = document.getElementById("datosGuardadosBien")
// nuevos botones
const nuevobotton = document.getElementById("boton-nuevo")
const nuevoBoton2 = document.getElementById("boton-nuevo2")

// recupero los datos al cargar la página
window.onload = function() {
    const datosGuardados = localStorage.getItem("DatosDelForm");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        DatosTerminados.innerHTML = "Bienvenido " + datos.nombre + ". Tus datos han sido guardados correctamente.";
    }
}

inputButtonForm.addEventListener("click", function(event){
    event.preventDefault();
    
    let DatosDelForm = {
        nombre: inputNameForm.value,
        usuario: inputUserForm.value,
        email: inputEmailForm.value,
        contrasenia: inputPasswordForm.value,
    }

    if (Object.values(DatosDelForm).some(value => !value.trim())) {
        Swal.fire({
            icon: "error",
            title: "lo siento",
            text: "completa tus datos correctamente",
            footer: '<a href="#">Why do I have this issue?</a>'
            });;
        return;
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "tus datos han sido guardados correctamente",
            showConfirmButton: false,
            timer: 1500
            });;
    }

    DatosTerminados.innerHTML = "Bienvenido " + DatosDelForm.nombre + ". Tus datos han sido guardados correctamente";
    let resultado = JSON.stringify(DatosDelForm);
    localStorage.setItem("DatosDelForm", resultado);
});

// creo productos
const Producto = function(tipo, marca, tamanio, precio,img) {
    this.tipo = tipo;
    this.marca = marca;
    this.tamanio = tamanio;
    this.precio = precio;
    this.imagen = img
}

let producto1 = new Producto("tabla", "pyzel", "6.0 fts", "700 usd", `../assets/tabla-pyzel-1.jpeg` );
let producto2 = new Producto("tabla", "pyzel", "6.0 fts", "700 usd", "/assets/tabla-pyzel-2.webp");
let producto3 = new Producto("tabla", "lost", "6.0 fts", "700 usd","/assets/tabla--lost-1.jpeg");
let producto4 = new Producto("tabla", "lost", "6.0 fts", "700 usd","./assets/tabla-lost-2.webp");
let producto5 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","./assets/trajeDeNeoprene-oneill-1");
let producto6 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/trajeDeNeoprene-oneill-2");
let producto7 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/trajeDeNeoprene-billabong-1");
let producto8 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/trajeDeNeoprene-billabong-2");
let producto9 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/quillas-fcs-1");
let producto10 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/quillas-fcs-2");
let producto11 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/quillas-fcs-3");
let producto12 = new Producto("quillas", "oneil", "6.0 fts", "700 usd","../assets/quillas-fcs-4");



let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7,producto8,producto9,producto10,producto11,producto12];

//carrito de compras
const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")

let carrito = []

lista.forEach((product) =>{
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.tipo}</h3>
    <p>Marca: ${product.marca}
    <p class = "tamanio" > Tamaño: ${product.tamanio}</p>
    <p class="price"> Precio: ${product.precio}</p>
    `
    shopContent.appendChild(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className= "comprar"
    content.append(comprar)

    comprar.addEventListener("click", () => {
        carrito.push({

            id:product.id,
            img:product.img,
            nombre:product.tipo,
            marca:product.marca,
            precio:product.precio

        })
        console.log(carrito)  
    })
})

verCarrito.addEventListener("click", () => {
    const modalContainer = document.createElement("div");
    modalContainer.className = "modal";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X"; 
    modalButton.className = "modal-header-Button";  

    modalHeader.appendChild(modalButton);

    modalContainer.appendChild(modalHeader);

    document.body.appendChild(modalContainer);
});

// // recorrer el array list para mostrar productos
// for (const producto of lista) {
//     let contenedor = document.createElement("div");
//     contenedor.classList.add("contenedorProducto")
//     contenedor.innerHTML = `
//         <img src= "${lista.img}"> 
//         <h2 class="ProductoTipo">${producto.tipo}</h2>
//         <p class="ProductoMarca">${producto.marca}</p>
//         <p class="ProductoPrecio">${producto.precio} usd</p>
//         <button class="ProductoBotton"> agregar al carrito </button><br>
//     `;
//     document.body.appendChild(contenedor);
// }
// const guardarlocal = (clave, valor) => {localStorage.setItem(clave,valor)}

// for (const x of lista) {
//     guardarlocal(x.tipo, JSON.stringify(x));
// }
// guardarlocal("listaproductos",JSON.stringify(lista))



















// para filtrar productos
// function BuscarProducto () {
//     const body = document.querySelector("body")
//     const input = document.getElementById("BuscarProducto").value // traigo el valor del input
//     const palabraClave = input.trim().toUpperCase()
//     const resultado = lista.filter((producto) => producto.tipo.toUpperCase().includes(palabraClave))
//     if(resultado.length > 0){
//         const container = document.createElement("div")
//         container.classList.add("container")// le agrego clase para editarla en css

//         resultado.forEach((producto) => {
//             const card = document.createElement("div")
//             card.classList.add("card-carrito")

//         const tipo = document.createElement("h2")
//         tipo.textContent = producto.tipo
//         card.appendChild(tipo)

//         const marca = document.createElement("p")
//         marca.textContent = producto.marca
//         card.appendChild(marca)

//         const tamanio = document.createElement("p")
//         tamanio.textContent = producto.tamanio
//         card.appendChild(tamanio)

//         const precio = document.createElement("p")
//         precio.textContent = producto.precio
//         card.appendChild(precio)

//         container.appendChild(card)
//         })
//         body.appendChild(container)
//     }else{
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong!",
//             footer: '<a href="#">Why do I have this issue?</a>'
//         });
//     }
// }
// const filtrarBoton = document.getElementById("filtrar")
// filtrarBoton.addEventListener("click", BuscarProducto)










