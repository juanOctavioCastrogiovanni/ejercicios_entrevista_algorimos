// fibonacci:
// version no recursiva


function fibonacci(nroHasta){
    n1 = 0;
    n2 = 1;
    let arreglo = [];

    for(let i = 0; i < nroHasta; i++){
        let aux = n1 + n2
        n1 = n2;
        n2 = aux
        arreglo.push(n2);
    }
    return arreglo
}

// console.log(fibonacci(8))

// fibonacci:
// version recursiva

function fibonacciRecursiva(nroHasta){
    if(nroHasta <= 1){
        return nroHasta;
    } else {
        return fibonacciRecursiva(nroHasta-2) + fibonacciRecursiva(nroHasta-1)
    }
}



console.log(fibonacciRecursiva(8))













