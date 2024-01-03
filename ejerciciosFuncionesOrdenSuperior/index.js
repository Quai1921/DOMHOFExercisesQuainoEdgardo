// 1. Convert the following named function to an arrow function:
//            function printMessage( message ) {
//                     console.log( message )
//            }

const fnPrintMessage = message => console.log(message)

fnPrintMessage(`1. Mindhub Cohort N° 53`)




// 2. Convert the following named function to an arrow function:
//             function createMultplication (number1, number2) {
//                       let result = number1 * number2
//                       return result
//              }

let createMultplication = (number1, number2) => {
    let result = number1 * number2
    // console.log(result)
    return result
}

const number1 = 6
const number2 = 3
console.log(`2. The result of the multiplication between ${number1} and ${number2} is equal to: `, createMultplication(number1, number2))




// 3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9], apply a map to that array and pass as an argument the named
// function shown in the previous exercise. Show by console the new array obtained.
const arrayRandomNumbers = [ 1,2,3,4,5,6,7,8,9 ]

const newArrayRandomNumbers = arrayRandomNumbers.map((arrayElement, index) => createMultplication(arrayElement, index) )
console.log(`3.`, newArrayRandomNumbers)

// El MAP trabaja similar a un FOR OF, solo que el FOR OF devuelve un array

// Si uso la funcion tradicional
// const newArray = arrayRandomNumbers.map(function (arrayElement, index){
//     let result = arrayElement * index
//     console.log(result)
//     return result
// } )
// console.log(newArray)

// for (const number in arrayRandomNumbers) {
//         console.log(`The element ${arrayRandomNumbers[number]} multiplied by the index ${number} is equal to: `, arrayRandomNumbers[number] * number)
// }





// 4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.
// GRADOS DE ALCOHOL ABV
const sortMostAlcoholicBeers = (array) => {
    return array.toSorted((item1, item2) => item2.abv - item1.abv)
                .slice(0,10)
}

console.log(`4. The 10 most alcoholic beers are:`, sortMostAlcoholicBeers(beers))




// 5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.
// AMARGOR IBU
const sortLeastBitterBeers = (array) => {
    return array.toSorted((item1,item2) => item1.ibu - item2.ibu)
                .slice(0,10)
}

console.log(`5. The 10 least bitter beers are:`, sortLeastBitterBeers(beers))




// 6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.
const searchBeer = (array, name) => {
    return array.find(item => item.name == name)
}
console.log(`6. The object with searched name is:`, searchBeer(beers, "Rabiator"))


// Sin usar funciones de orden superior
// function searchBeer(array, name){
//     for (const item of array) {
//         if(item.name == name){
//             return item
//         } 
//     }
// return `The searched beer name does not exist.`
// }

// console.log(searchBeer(beers, "Rabiator"))




// 7. Generate a function that receives as a parameter an array of beers, a value and that returns the first 
// object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays 
// a message in the console that says “ There is no beer with an ibu of (value entered).”
const ibuBeers = (array, ibuNumber) => {
    let searchedObject = array.find(item => item.ibu == ibuNumber)
    if(searchedObject){
        return searchedObject
    } else {
        return `There is no beer with an ibu of ${ibuNumber}.`
    }
}

console.log(`7. The object with searched ibu is:`, ibuBeers(beers, 70))

// function ibuBeers (array, ibuNumber){
//     for (const item of array) {
//         if(item.ibu == ibuNumber)
//         return item
//     }
//     return `There is no beer with an ibu of value entered.`
// }

// console.log(ibuBeers(beers, 8))




// 8. Generate a function that receives the name of a beer as a parameter and returns the position in the array 
// of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”
function positionBeersInArray(array, nameBeer) {
    const indexBeer = array.findIndex(item => item.name == nameBeer)
    if (indexBeer != -1) {
        return `The index of name entered is: ${indexBeer}`
    } else {
        return `Name of the beer: ${nameBeer} does not exist.`
    }
}
const SearchedIndexBeer = positionBeersInArray(beers, "Rabiator")
console.log(`8.`,SearchedIndexBeer)


// Otra forma de llegar a lo buscado
// function positionBeersInArray(nameBeer){
//     let nameBeers = []
//     for (const item of beers){
//         nameBeers.push(item.name)
//     }
//     // console.log(nameBeers)
//     if(nameBeers.indexOf(nameBeer) == -1){
//         return `Name of the beer entered does not exist.`
//     }
//     return `The index of name entered is: ${nameBeers.indexOf(nameBeer)}`
// }

// const indexBeer = positionBeersInArray("Rabiator")
// console.log(indexBeer)




// 9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the 
// beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)
const beersNotExceedAlcohol = (array, alcoholValue) =>{
    return array.filter(item => item.abv <= alcoholValue)
                .map(item => ({ name: item.name,
                                alcohol: item.abv,
                                bitterness: item.ibu
                            }))
}

console.log(`9.`, beersNotExceedAlcohol(beers, 5))




// 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array
// with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.
const propertySortedBeers = (array, prop, booleanValue) => {
    if(booleanValue == true){
        return array.filter(item => item[prop])
                    .toSorted((item1, item2) => {
                        if( item1[prop] < item2[prop] ){
                            return -1
                        }
                        if( item1[prop] > item2[prop] ){
                            return 1
                        }
                        return 0
                    } )
                    .slice(0, 10)
    } else {
        return array.filter(item => item[prop])
                    .toSorted((item1, item2) => {
                        if(item1[prop] < item2[prop]){
                            return 1
                        }
                        if(item1[prop] > item2[prop]){
                            return -1
                        }
                        return 0
                    })
                    .slice(0, 10)
    }
    
}

console.log(`10.`, propertySortedBeers(beers, "name", true))

// Solución puesta en común
// const propertySortedBeers = (array, prop, booleanValue) => {
//     const ordenedBeers = array.filter(item => item[prop])
//                                 .toSorted((item1, item2) => {
//                                     if( item1[prop] < item2[prop] ){
//                                         return -1
//                                     }
//                                     if( item1[prop] > item2[prop] ){
//                                         return 1
//                                     }
//                                     return 0
//                                 } )
//                                 if (booleanValue){
//                                     return ordenedBeers.slice(0, 10)
//                                 } else {
//                                     return ordenedBeers.reverse().slice(0, 10)
//                                 }
// }
// console.log(`10.`, propertySortedBeers(beers, "abv", false))




// 11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. 
// The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and 
// one row for each element of the array. Each row must have the data requested for each of the beers.
const tableBody = document.getElementById("tbody")

function generateTable(array){
    return `
        <tr>
            <td>${array.name}</td>
            <td>${array.abv}</td>
            <td>${array.ibu}</td>
        </tr>`
}

function completeTable(array, idHtml){
    let tableData = ""

    array.forEach(array => tableData += generateTable(array))

    idHtml.innerHTML = tableData
}

completeTable(beers, tableBody)


// OTRA ALTERNATIVA PROBANDO FOR OF
// const tableBody = document.getElementById("tbody")

// function generatetable(array, idHtml){
//     let tableData = ""

//     for (const item of array) {
//     tableData += `<tr>
//                     <td>${item.name}</td>
//                     <td>${item.abv}</td>
//                     <td>${item.ibu}</td>
//                 </tr>`
//     }
    
//     idHtml.innerHTML = tableData
// }

// generatetable(beers, tableBody)


// USANDO CREATE ELEMENT
// const tableBody = document.getElementById("tbody")

// function generateTable(array){
// const tr = document.createElement(`tr`)

// const tdName = document.createElement(`td`)
// tdName.textContent = array.name
// const tdABV = document.createElement(`td`)
// tdABV.textContent = array.abv
// const tdIBU = document.createElement(`td`)
// tdIBU.textContent = array.ibu

// tr.appendChild(tdName)
// tr.appendChild(tdABV)
// tr.appendChild(tdIBU)

// // o puedo usar append
// // tr.append(tdName, tdABV, tdIBU)

// return tr
// }


// function completeTable(array, idHtml){
//     let fragment = document.createDocumentFragment()
    
//     array.forEach(array => {
//         const tr = generateTable(array)
//         fragment.appendChild(tr)
//     })

//     idHtml.appendChild(fragment)
// }

// completeTable(beers, tableBody)