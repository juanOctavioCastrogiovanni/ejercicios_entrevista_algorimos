// 1- la funcion esAnagrama recibe 2 string
// 2- El algoritmo debe hacer un conteo de cada una de las letras de ambos string. 
// 3- Si ambas tienen todas las letras entonces son anagramas.



const esAnagrama = (cadena1, cadena2) => {
    return (ordenamiento(cadena1) == ordenamiento(cadena2));
}

// 4 5 2 1 -> 1
// 4 5 2 1 
1 
// letra mas chica = resultado del primer for
// h o l a 0
// a 3
// cadOrdenada -> [a] 
const ordenamiento = cad => {
    let cadOrdenada = [];
    let pos
    let menor;
    let largo = cad.length

    for(let i = 0 ; i < largo; i++){

        menor = encontrarMenor(cad).menor;
        pos = encontrarMenor(cad).pos;
        if(menor != " "){
            cadOrdenada.push(menor)
        }
        cad = quitarElemento(cad, pos);
    }
    return cadOrdenada
}

function quitarElemento(cad, posicion){
    let cadenaAuxiliar = []
    for(let i=0; i < cad.length; i++){
        if(posicion != i){
            cadenaAuxiliar.push(cad[i]);
        }
    }
    return cadenaAuxiliar;
}

const encontrarMenor = arreglo => {
    let primero = true;
    let menor;
    let pos;

    for(let i=0; i<arreglo.length;i++){
        if(primero){
            menor = arreglo[i];
            primero = false;
            pos = i;
        } else if(menor > arreglo[i]){
            menor = arreglo[i]
            pos = i;
        }
        
    }

    return {menor,pos}
}

// CON UN POCO DE MAGIA EN JS
// const ordenamiento = cad => {
//     let aux;
//     let ordenado = cad.split("")
   
    
//     for(let i = 0 ; i < ordenado.length; i++){
//         for(let j = i+1; j < ordenado.length; j++){

//             if(ordenado[i]>ordenado[j]){
//                 aux = ordenado[i]
//                 ordenado[i] = ordenado[j]
//                 ordenado[j] = aux
                
//             }
//         }
//     }
//     return ordenado.join("").trim()
   
// }



