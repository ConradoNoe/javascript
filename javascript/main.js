function bienvenido() {
    ingresarNombre = prompt("Ingresa tu nombre");
    ingresarApellido = prompt("Ingresa tu apellido");
    alert("Bienvenido " + ingresarNombre + " " + ingresarApellido);
    console.log("el nombre ingresado es " + ingresarNombre)
}

function edad() {
    let edadIngresada = parseInt(prompt("Ingresa tu edad"));
    if (edadIngresada < 18) {
        alert("Eres menor de edad y no puedes realizar esta operación");
        console.log("el usuario es menor de edad se cancela la operacion")
        return false;
    } else {
        return true;
    }
}
const TipoDeMoneda = function (tipo, valor, stock) {
    this.tipo = tipo;
    this.valor = valor;
    this.stock = stock;
};

let moneda = new TipoDeMoneda("dolar", 1060, 1000000);
let moneda1 = new TipoDeMoneda("euro", 1170, 50000);
let moneda2 = new TipoDeMoneda("real", 220, 2000000);
let moneda3 = new TipoDeMoneda("libra", 1485, 10000);
let moneda4 = new TipoDeMoneda("riyadh", 900, 8000);
let moneda5 = new TipoDeMoneda("franco", 1200, 30000);

let distintasMonedas = [moneda, moneda1, moneda2, moneda3, moneda4, moneda5];

function disponibilidadDeMoneda() {
    let MonedaACambiar = prompt("Ingresa qué moneda quieres cambiar").toLowerCase();
    let resultado = distintasMonedas.filter((monedaAcambiar) => monedaAcambiar.tipo.toLowerCase().includes(MonedaACambiar)); 
    if (resultado.length > 0) { 
        console.table(resultado);
    }else {
        alert("Tu moneda a cambiar no está disponible en este momento");
    }
}

bienvenido();
disponibilidadDeMoneda();

