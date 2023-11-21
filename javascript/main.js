// function bienvenido() {
//     ingresarNombre = prompt("Ingresa tu nombre");
//     ingresarApellido = prompt("Ingresa tu apellido");
//     alert("Bienvenido " + ingresarNombre + " " + ingresarApellido);
//     console.log("el nombre ingresado es " + ingresarNombre)
// }

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

// function cambio() {
//     let permitido = edad(); 

//     if (permitido) {
//         let tipoDeCambio = prompt("Escribe a continuación qué moneda quieres cambiar: dólares, euros o reales, o si quieres cancelar, escribe 'esc'");
    
//         while (tipoDeCambio !== 'esc') {
//             switch (tipoDeCambio) {
//                 case "dolares":
//                     let cambioDolares = 950;
//                     let montoDolares = parseFloat(prompt("Ingresa el monto que quieras cambiar a dólares"));
//                     let totalDolares = montoDolares / cambioDolares;
//                     alert("Usted recibirá " + totalDolares + " Dolares");
//                     break;
//                 case "euros":
//                     let cambioEuros = 1100;
//                     let montoEuros = parseFloat(prompt("Ingresa el monto que quieras cambiar a euros"));
//                     let totalEuros = montoEuros / cambioEuros;
//                     alert("Usted recibirá " + totalEuros + " Euros");
//                     break;
//                 case "reales":
//                     let cambioReales = 70;
//                     let montoReales = parseFloat(prompt("Ingresa el monto que quieras cambiar a reales"));
//                     let totalReales = montoReales / cambioReales;
//                     alert("Usted recibirá " + totalReales + " Reales");
//                     break;
//                 default:
//                     alert("Los datos ingresados son incorrectos");
//                     break;
//             }
//             tipoDeCambio = prompt("Si quieres seguir cambiando, vuelve a ingresar el tipo de moneda: dolares, euros, reales. Si ya terminaste la operación, escribe 'esc' para salir");
//         }
//         alert("Gracias por utilizar la funcion de cambio.");
//     }
// }

// bienvenido();
// cambio();

// nueva entrega

const TipoDeMoneda = function (tipo, valor, stock){
    this.tipo = tipo
    this.valor = valor
    this.stock = stock
}
let moneda = new TipoDeMoneda("dolar", 1060, 1000000)
let moneda1 = new TipoDeMoneda("euro", 1170, 50000)
let moneda2 = new TipoDeMoneda("real", 220, 2000000)
let moneda3 = new TipoDeMoneda("libra", 1485, 10000)
let moneda4 = new TipoDeMoneda("riyadh", 900, 8000)
let moneda5 = new TipoDeMoneda("franco", 1200, 30000)

let distintasMonedas = [moneda,moneda1,moneda3,moneda4,moneda5]
