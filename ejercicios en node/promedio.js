// promedio de un arreglo.arreglo.

function promedio(vector){
    // sumatoria, de todos sus elementos, dividido la cantidad de elementos. 
    let promedio;
    let acumulador = 0;

    for(let i=0 ; i < vector.length; i++){
        acumulador += vector[i];
    }

    promedio = acumulador / vector.length;

    return promedio;

}

console.log(promedio([6,7,8,9]));