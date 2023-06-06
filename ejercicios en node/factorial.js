//n! = (n) + (n - 1)!
//n = n-1 + n-2



function factorialRecursivo(numero){
   if(numero == 1){
        return numero;
    }else{
        return numero + factorialRecursivo(numero - 1)
    }    
}

console.log(factorialRecursivo(8))

function factorial(numero){

    for(let i=0; i < numero ; i++){
        numero = numero + i; 
    }

    return numero
}

