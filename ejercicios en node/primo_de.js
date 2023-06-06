// dado un valor imprimir los primeros numeros primos
// 1- dado un valor, iterar hasta llagar a else. 
// 2- ese i va a hacer un valor que va a intentar ser dividido, si este no se puede entonces es primo y lo agrega
// en un Array. 


const primoDe = valor => {
    let primos = [];
    let esPrimo;
    
    for (let i=1; i <= valor; i++){
        esPrimo = true;
        for (let j=1; j <= valor; j++){
            
            if(i%j==0 && j!=1 && j!=i){
                esPrimo=false;
            }

        }

        if(esPrimo){
            primos.push(i)
        }

    }

    return primos

}

console.log(primoDe(100));