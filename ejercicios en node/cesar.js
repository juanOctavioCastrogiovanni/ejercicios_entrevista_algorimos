// Cifrado César: Escribe una función que tome una cadena de
//  texto y un número de desplazamiento como entrada, y aplique
//   el cifrado César a la cadena, desplazando cada letra por el número especificado.

console.log()

let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ' , 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function cifradoCesar(cadenaIngresada, desplazamiento){
    let cadena = "";
    let posicion;
    for(let i = 0; i< cadenaIngresada.length; i++){
        posicion = abecedario.indexOf(cadenaIngresada[i])
        if(posicion+desplazamiento > 27 ){
            cadena+= abecedario[posicion+desplazamiento-27]

        }else if(posicion < 0){

        }else{
            cadena+= abecedario[posicion+desplazamiento]
        }

    }

    return cadena;
}

function descifradoCesar(cadenaIngresada, desplazamiento){
    let cadena = "";
    let posicion;
    for(let i = 0; i< cadenaIngresada.length; i++){
        posicion = abecedario.indexOf(cadenaIngresada[i])
        if(posicion-desplazamiento < 0 && posicion!=-1){
            cadena+= abecedario[posicion-desplazamiento+27]

        }else if(posicion < 0){

        }else{
            cadena+= abecedario[posicion-desplazamiento]
        }

    }

    return cadena;
}

console.log(descifradoCesar("A", 3))



