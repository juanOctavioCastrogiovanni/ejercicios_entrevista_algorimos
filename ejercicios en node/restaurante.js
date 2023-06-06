// 3. Restaurante
// Nuestro cliente quiere saber qué platos de su restaurante son rentables y cuáles no.

// Para esto pide crear una función llamada "rentabilidad" que como parámetro tome
// un arreglo de objetos con los platos del restaurante:
// let platos = [{ nombre: 'Chop Suey', costo: 100, precio: 300 }, { nombre: 'Paella', costo:
// 300, precio: 270 }, { nombre: 'Ceviche', costo: 200, precio: 500 }]

// La función debe devolver un nuevo arreglo con objetos que tengan como key el
// nombre de cada plato y, como value, el resultado del cálculo que determinará el
// beneficio-costo.

// Ejemplo de output:
// [{ Chop Suey: 200 }, { Paella: -30 }, { Ceviche: 300 }]


let platos = [{ nombre: 'Chop Suey', costo: 100, precio: 300 }, { nombre: 'Paella', costo: 300, precio: 270 }, { nombre: 'Ceviche', costo: 200, precio: 500 }]


function rentabilidad(platos){

    let objetos = {}
    let rentabilidades = []
    let diccionario = {}

    for(let i = 0; i < platos.length; i++){
      
        diccionario = { [platos[i].nombre]: (platos[i].precio-platos[i].costo) }
        rentabilidades.push(diccionario)       

    }
  
    return rentabilidades
} 

console.log(rentabilidad(platos))














