// Punto 1 
// Capturar el H1, mediante un ID, en una variable llamada "titulo".
let titulo = document.getElementById("titulo")

console.log(titulo)

// PARA DARLE ESTILO AL TITULO
titulo.classList.add("font-bold", "text-5xl", "pt-1")




// Punto 2
// Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.
let tituloPrincipal = "Frutas"

titulo.textContent = tituloPrincipal 




// Punto 3 
// Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.
let headerAndFooter = document.querySelectorAll(".headerAndFooter")
console.log(headerAndFooter)

for (const headAndFoot of headerAndFooter) {
    headAndFoot.classList.add("bg-orange-400")
}




// Punto 4
// Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.
let footerMindHub = document.getElementById("mindhub")
console.log(footerMindHub)

let nombreFooter = " Edgardo Quaino - Cohort-53"
footerMindHub.textContent += nombreFooter

footerMindHub.classList.add("text-xl")




// Punto 5
// Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.
let divFrutas = document.getElementById("contenedor")
console.log(divFrutas)


divFrutas.classList.add("flex", "flex-wrap", "gap-5", "justify-center", "max-w-[1500px]", "py-5")




// Punto 6
// Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. 
// (La card debe contener los siguientes datos: nombre, foto y descripción).
function estructuraCard(nombre, imagen, descripcion){
    return `<article class="articuloTarjetas">
    <img class= "imagenestarjetas" src="${imagen}" alt="Imagen de ${nombre}">
        <h3 class="tituloTarjetas">${nombre}</h3>
    <p class="descripcionTarjeta">${descripcion}</p>
    </article>`
}




// Punto 7
// Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, 
// utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).
let tarjetaFrutas = ""

for (let fruta of frutas){
    tarjetaFrutas += estructuraCard(fruta.nombre, fruta.foto, fruta.descripcion)
    // console.log(fruta)
}
// console.log(tarjetaFrutas)




// Punto 8
// Mostrar las cards con los datos pedidos en el div ".contenedor". 
divFrutas.innerHTML = tarjetaFrutas
console.log(divFrutas.innerHTML)

// PARA DARLE ESTILOS A LAS CLASES CREADAS EN EL PRIMER DIV DEL MAIN
let articulosTarjetas = document.querySelectorAll(".articuloTarjetas")
for (const articuloTarjeta of articulosTarjetas) {
    articuloTarjeta.classList.add("flex", "flex-col", "items-center", "w-[350px]", "h-[450px]", "rounded-2xl", "p-2.5", "border", "border-black")
}

let imagenesTarjetas = document.querySelectorAll(".imagenestarjetas")
for (const imagenTarjeta of imagenesTarjetas) {
    imagenTarjeta.classList.add("h-[250px]", "object-contain")
}

let titulosTarjetas = document.querySelectorAll(".tituloTarjetas")
for (const titulosTarjeta of titulosTarjetas) {
    titulosTarjeta.classList.add("text-center", "font-bold", "text-xl", "w-full", "p-0.5")
}

let descripcionesTarjetas = document.querySelectorAll(".descripcionTarjeta")
for (const descripcionTarjeta of descripcionesTarjetas) {
    descripcionTarjeta.classList.add("text-center", "pb-5")
}




// Punto 9
// Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
function crearTituloDentroDelDiv(titulo){
    return `<h2 id="tituloListaDiv">${titulo}</h2>`
}

let tituloDivLista = "Frutas Dulces"

let divLista = document.getElementById("lista")
console.log(divLista)

divLista.innerHTML = crearTituloDentroDelDiv(tituloDivLista)

// PARA DARLE ESTILOS AL h2 CREADO EN EL SEGUNDO DIV DEL MAIN
tituloDivLista = document.getElementById("tituloListaDiv")
tituloDivLista.classList.add("font-bold", "text-5xl")

divLista.classList.add("flex", "flex-col", "items-center", "gap-5", "py-5")




// Punto 10
// Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). 
// Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true.

function listadoDeFrutasDulces(array){
    let filtradoFrutasDulces = array.filter(item => item.esDulce == true)
    let listaFrutasDulces = document.createElement(`ul`)

    for (const item of filtradoFrutasDulces) {
        let frutaListado = document.createElement(`li`)
        frutaListado.textContent = item.nombre
        listaFrutasDulces.appendChild(frutaListado)
    }
    return listaFrutasDulces
}

let listaFinalFrutasDulces = listadoDeFrutasDulces(frutas)
console.log(listaFinalFrutasDulces)

// Si quisiera ordenarlos le aplicaría luego del filter:
// .toSorted((a, b) => a.nombre.localeCompare(b.nombre))



// APLICANDO LO VISTO EN LA RESOLUCIÓN CONJUNTA!!! 
// function listadoDeFrutasDulces(array){
//     const ul = document.createElement(`ul`)

//     const liNombres = document.createElement(`li`)
//     liNombres.textContent = array.nombre

//     ul.appendChild(liNombres)

//     return ul
// }
// console.log(listadoDeFrutasDulces(frutas))


// function completarListaDesordenada(listaFrutas, divLista){
//     let fragment = document.createDocumentFragment()
//     const filtradas = listaFrutas.filter(item => item.esDulce == true)

//     filtradas.forEach(array => {
//         const ul = listadoDeFrutasDulces(array)
//         fragment.appendChild(ul)
//     })

//     divLista.appendChild(fragment)
// }

// completarListaDesordenada(frutas, divLista)



// Usando un FOR OF y un condicional para crear un nuevo array con las frutas filtradas
// let frutasDulcesFiltradas= []
// for (const fruta of frutas) {
//     if(fruta.esDulce == true){
//         frutasDulcesFiltradas.push(fruta.nombre)
//     } 
// }
// console.log(frutasDulcesFiltradas)


// FILTER FUNCIÓN "TRADICIONAL"
// let listaFrutasDulces = frutas.filter(function(fruta) {
//     return fruta.esDulce == true
// })
// console.log(listaFrutasDulces)

// PARA HACER FUNCION FLECHA
// let listaFrutasDulces = frutas.filter(fruta => fruta.esDulce == true)
// console.log(listaFrutasDulces)




// Punto 11
// Mostrar la lista de frutas dulces en el div "#lista". 
divLista.appendChild(listaFinalFrutasDulces)


// PARA DARLE ESTILOS AL UL Y LOS LI
listaFinalFrutasDulces.classList.add("p-5", "text-2xl", "list-disc")

let itemsListaFiltrada = document.querySelectorAll("li")
for (const itemListaFiltrada of itemsListaFiltrada) {
    itemListaFiltrada.classList.add("py-2", "text-xl")
}










