// *Pasar un número a binario.



function pasarNumeroABinario(numero){

    let arrayBinario = []

    while(numero >= 1){

        arrayBinario.push(numero % 2)
        numero = Math.floor(numero/2);
    }

    if(numero == 2){
        arrayBinario.push(1);
    }
    return arrayBinario.reverse()
}

console.log(pasarNumeroABinario(89562))
//1010111 0111011 010


