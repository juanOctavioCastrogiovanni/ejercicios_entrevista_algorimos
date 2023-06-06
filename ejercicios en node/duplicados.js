//eliminar elementos duplicados de un arreglo
// 1- mientras recorro un arreglo voy agregando cada caracter en un arreglo. 
// 2- en cada iteracion pregunto si ese caracter esta en el arreglo, si esta no lo agrego, si no esta si.

function eliminarRepetidos(vector){
    let vectorSinRepetidos = [];

    for(let i=0; i<vector.length; i++){
        if(!vectorSinRepetidos.includes(vector[i])){
            vectorSinRepetidos.push(vector[i]);
        }
    }

    return vectorSinRepetidos;

}

console.log(eliminarRepetidos([1,2,3,3,4,2,3]))