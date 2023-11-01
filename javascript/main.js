function bienvenido(){
    let ingresarNombre = prompt("ingresa tu nombre")
    let ingresarApellido = prompt("ingresa tu apellido")
    alert("bienvenido " + ingresarNombre + " " + ingresarApellido)
}

function cambioDolares(dolsHoy,tusPesos){
    alert("buenos dias, hoy el dolar esta 950 pesos")
    dolsHoy = 950
    tusPesos = parseFloat(prompt("ingresa cuantos pesos queres cambiar"))
    let resultadoCambio = tusPesos / dolsHoy
    alert("tenes " + resultadoCambio + " dolares")
}
function cambioReales(realesHoy,tusPesos1){
    alert("buenos dias, hoy el real esta 69 pesos")
    realesHoy = 69
    tusPesos1 = parseFloat(prompt("ingresa cuantos pesos queres cambiar"))
    let resultadoCambio1 = tusPesos1 / realesHoy
    alert("tenes " + resultadoCambio1 + " reales")
}
function cambioEuros(eurosHoy,tusPesos2){
    alert("buenos dias, hoy el euro esta 1100 pesos")
    eurosHoy = 1100
    tusPesos2 = parseFloat (prompt("ingresa cuantos pesos queres cambiar"))
    let resultadoCambio2 = tusPesos2 / eurosHoy
    alert("tenes " + resultadoCambio2 + " euros")
}


bienvenido()
cambioDolares()
cambioReales()
cambioEuros()