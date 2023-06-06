//Ordenar por alfabeto

let arreglo = ["Ave", "Libro", "Barco"];

const ordenarAlfabeticamente = vector => {
    
    let auxiliar;    

    for (let i=0; i < vector.length ; i++){
        
        for (let j=i+1; j < vector.length ; j++){
        
            if(vector[i].toLowerCase() > vector[j].toLowerCase() ){
                auxiliar = vector[i];
                vector[i] = vector[j];
                vector[j] = auxiliar
            }
    
        }    
    
    }

    return vector

}

console.log(ordenarAlfabeticamente(arreglo))


















