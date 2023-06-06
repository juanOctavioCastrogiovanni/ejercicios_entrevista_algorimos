//1- ingresa una cadena de palabras y debe devolver una matriz, 
// en cada posicion debe haber una dupla de plabra y cantidad

function contadorDePalabras(palabras){

    palabras = palabras.toLowerCase();
    palabras = palabras.split(" ");
    let palabrasContadas = [];
    let posicion;
    
    for (let i=0 ; i<palabras.length ; i++){
        if(soloPalabras(palabrasContadas).indexOf(palabras[i]) >= 0){
            posicion = soloPalabras(palabrasContadas).indexOf(palabras[i]);
            palabrasContadas[posicion][1]++;
        } else {
            palabrasContadas.push([palabras[i],1]);
        }
    }

    return palabrasContadas;

}

function soloPalabras(matriz){
    let array = [];

    for(let i=0; i< matriz.length ; i++){
        array.push(matriz[i][0]);
    }
    
    return array
}

console.log(contadorDePalabras("Hola como estan estan como"))
