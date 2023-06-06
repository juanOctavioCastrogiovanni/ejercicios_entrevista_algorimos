const menor = arreglo => {
    let primeraIteracion = true;
    let menor;

    for(let i=0 ; i <= arreglo.length; i++){
        
        if(primeraIteracion){

            menor = arreglo[i];
            primeraIteracion = false;

        } else if (arreglo[i] < menor){
            menor = arreglo[i];
        }

    }

    return menor;
}

console.log(menor([6,7,3,8,2,19]));

