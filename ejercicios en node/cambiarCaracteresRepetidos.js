// "Si en una cadena un caracter consecutivamente esta repetido, remplazarlo con un valor que tome por parametro"
// 1- Funcion recibe 2 parametros, una cadena y un caracter. 
// 2- Recorre la cadena y si detecta que el caracter es igual que el anterior lo cambia por el valor. 
// 3- Una variable que guarde el caracter anterior, ese carter lo evalua con el valor de la posicion actual del arreglo.
// 4- Si se repite mas de una vez, ignorar el cambio. 


//aab c -> acb 
//aacabb ->  aaab

//aaabbcccccccssdddff

function cambiarRepetido(cadena, caracter){
    let caracterAnterior = "";
    let buffer1 = false;
    cadena = cadena.split("")

    for( let i=0; i < cadena.length; i++){
            if(!buffer1 && !buffer2 && caracterAnterior == cadena[i]){
                buffer1 = true;
            }else if(buffer1 && caracterAnterior != cadena[i]){
                if(!buffer2){
                cadena[i-1] = caracter;
                buffer1 = false;
                } else {
                    buffer2 = false;
                    buffer1 = false;
                }
            } else if(buffer1 && caracterAnterior == cadena[i]){
                buffer2 = true;
            }

            
            if(cadena.length-1 == i){
                if(!buffer2 && caracterAnterior == cadena[i]) {
                    cadena[i] = caracter;
                }
            }
            
            caracterAnterior = cadena[i];

    }
    cadena = cadena.join("");
    return cadena;

}

console.log(cambiarRepetido("aaabbcccccccssdddfff", "1"))










