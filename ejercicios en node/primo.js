function esPrimo(numero){
    if(numero <= 1){
        return false;
    }

    for(let i=2; i<(numero/2);i++){
        if(numero%i==0){
            return false;
        }
    }

    return true

}

console.log(esPrimo(process.argv[2]))