 // entrega 3
//formulario con guardado en local storage
const iniciarForm = document.getElementById("iniciar-form")
const inputNameForm = document.getElementById("nameForm")
const inputUserForm = document.getElementById("userForm")
const inputEmailForm = document.getElementById("emailForm")
const inputPasswordForm = document.getElementById("passwordForm")
const inputButtonForm = document.getElementById("sendData")
const DatosTerminados = document.getElementById("datosGuardadosBien")

// recupero los datos al cargar la página
window.onload = function() {
    const datosGuardados = localStorage.getItem("DatosDelForm");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        DatosTerminados.innerHTML = "Bienvenido " + datos.nombre + ". Tus datos han sido guardados anteriormente.";
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
        alert("Por favor, complete todos los campos correctamente");
        return;
    } else {
        alert("Los datos han sido guardados correctamente");
    }

    DatosTerminados.innerHTML = "Bienvenido " + DatosDelForm.nombre + ". Tus datos han sido guardados correctamente";
    let resultado = JSON.stringify(DatosDelForm);
    localStorage.setItem("DatosDelForm", resultado);
});

// creo productos
const Producto = function(tipo, marca, tamanio, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.tamanio = tamanio;
    this.precio = precio;
}

let producto1 = new Producto("tabla", "oneil", "6.0 fts", "700 usd");
let producto2 = new Producto("tabla", "oneil", "6.0 fts", "700 usd");
let producto3 = new Producto("traje de neoprene", "oneil", "6.0 fts", "700 usd");
let producto4 = new Producto("traje de neoprene", "oneil", "6.0 fts", "700 usd");
let producto5 = new Producto("quillas", "oneil", "6.0 fts", "700 usd");
let producto6 = new Producto("quillas", "oneil", "6.0 fts", "700 usd");

let lista = [producto1, producto2, producto3, producto4, producto5, producto6];

// recorrer el array list para mostrar productos
for (const producto of lista) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedorProducto")
    contenedor.innerHTML = `
        <h2 class="ProductoTipo">${producto.tipo}</h2>
        <p class="ProductoMarca">${producto.marca}</p>
        <p class="ProductoPrecio">${producto.precio} usd</p>
        <button class="ProductoBotton"> agregar al carrito </button><br>
    `;
    document.body.appendChild(contenedor);
}
const guardarlocal = (clave, valor) => {localStorage.setItem(clave,valor)}

for (const x of lista) {
    guardarlocal(x.tipo, JSON.stringify(x));
}
guardarlocal("listaproductos",JSON.stringify(lista))



// para filtrar productos
function BuscarProducto () {
    const body = document.querySelector("body")
    const input = document.getElementById("BuscarProducto").value // traigo el valor del input
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((producto) => producto.tipo.toUpperCase().includes(palabraClave))
    if(resultado.length > 0){
        const container = document.createElement("div")
        container.classList.add("container")// le agrego clase para editarla en css

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
// Función para agregar productos al carrito
let carrito = [];








