// recorre la cadena, y almacena en una pila los simbolos de apertura.
// Cuando detecte un simbolo de cierre debe comparar si es compatible. 
// Si es compatible con el ultimo de la pila, se debe extraer de la misma. 
// Si no es compatible, devuelve false; 
// si recorre todo y la pila esta vacia devuelve true
// ({

function analisisSintactico(cadena){
    let pila = [];

    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] === "[" || cadena[i] === "("){
            pila.push(cadena[i])
        }else if(cadena[i] === "]" || cadena[i] === ")"){

            if(cadena[i] === "]"){

                if(pila[pila.length-1] == "["){

                    pila.pop();
                    
                } else{
                    
                    return false
                }      

            } else if(cadena[i] === ")"){

                if(pila[pila.length-1] == "("){

                    pila.pop();
                    
                }else{
                    return false
                }         
            }
        } 

    }

    if(pila.length!=0){
        return false
    }

    return true


}

console.log(analisisSintactico("if(verdadero[tumama)]"))




