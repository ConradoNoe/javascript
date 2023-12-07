let productos = [
    //tablas
        {tipo: "tabla", marca:"pyzel", medida:"6.0", precio:700},
        {tipo: "tabla", marca:"uva surf", medida:"6.0", precio:600},
        {tipo: "tabla", marca:"all merrik", medida:"5.11", precio:800},
        {tipo: "tabla", marca:"pyzel", medida:"5.9", precio:1000},
        {tipo: "tabla", marca:"lost", medida:"6.3", precio:900},
        {tipo: "tabla", marca:"lost", medida:"6.0", precio:1200},
        {tipo: "tabla", marca:"camaron brujo", medida:"5.10", precio:600},
    //trajes de neoprene
        {tipo: "traje de neoprene", marca:"vans", medida:"3.2", precio:280},
        {tipo: "traje de neoprene", marca:"ripcurl", medida:"4.3", precio:200},
        {tipo: "traje de neoprene", marca:"quicksilver", medida:"3.2", precio:350},
        {tipo: "traje de neoprene", marca:"billabong", medida:"3.2", precio:400},
        {tipo: "traje de neoprene", marca:"volcom", medida:"4.3", precio:300},
    //quillas
        {tipo: "quillas", marca:"fcs", medida:"medium", precio:120},
        {tipo: "quillas", marca:"twin fin", medida:"short", precio:100},
        {tipo: "quillas", marca:"fcs", medida:"large", precio:130},
    //leashes
        {tipo: "pita", marca:"quicksilver", medida:"mt", precio:80},
        {tipo: "pita", marca:"ripcurl", medida:"xl", precio:40},
]
for (const producto of productos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `
        <h2> ${producto.tipo} </h2>
        <p> ${producto.marca} </p>
        <b> ${producto.precio} usd </b>
        `
        document.body.appendChild(contenedor)
}

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
