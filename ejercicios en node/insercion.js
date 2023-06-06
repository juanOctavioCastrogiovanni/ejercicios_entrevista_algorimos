let numeros = [5, 3, 4, 1, 2];

// console.log(numeros)
console.log(insercion(numeros))

// //este metodo conciste en: 
// - Recorrer el arreglo.
// - Buscar el mas chico. 
// - Colocarlo adelante. 
// - realizar la misma accion pero con una subcadena que no contenga este elemento

function insercion(arreglo){
    let numerosOrdenados = [];
    let menor;
    let pos;
    let itereacion = arreglo.length;

    if(arreglo.length === 1){
        return [arreglo];
    }

    for (let i = 0; i < itereacion; i++){
        menor = encontrarMenor(arreglo).menor;
        pos = encontrarMenor(arreglo).pos;
        arreglo.splice(pos,1);
        numerosOrdenados.push(menor);       
    }
    
    
    return numerosOrdenados;
}


function encontrarMenor(arregloa){

    let primero = true;
    let menor;
    let pos;
    
    arregloa.forEach((element,i)=> {
        if(primero){
            menor = element;
            pos = i
            primero = false;
        } else if(element < menor){
            menor = element;
            pos = i
        }
              
    });

    return {menor, pos};
}

