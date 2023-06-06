
// // Claro, aquí tienes una consigna de un ejercicio de cadenas para una entrevista:

// // Considere que se te da una cadena de caracteres compuesta solo por letras mayúsculas y espacios en 
// blanco. Tu tarea es escribir un programa que tome esta cadena como entrada y genere una nueva cadena 
// que contenga las mismas palabras en orden inverso.

// // Por ejemplo, si se ingresa la cadena "HOLA MUNDO", el programa debe generar la cadena "MUNDO HOLA".

// // Puedes asumir que no hay espacios en blanco al principio o al final de la cadena y que solo hay un 
// espacio en blanco entre palabras.

// // Escribe un programa en el lenguaje de programación de tu elección para resolver este problema. 
// Asegúrate de considerar casos de prueba adicionales y de manejar adecuadamente cualquier entrada 
// inválida o excepciones que puedan surgir.


let cadena = "HOLA MUNDO"

function cambiarOrdenPalabras(cadena){
    
    let cadenaAuxiliar = [];

    cadena = separacion(cadena, " ")
    
    for (let i=cadena.length - 1 ; i>=0; i--){
        cadenaAuxiliar.push(cadena[i]);
    }
    
    cadenaAuxiliar = cadenaAuxiliar.join(" ")

    return cadenaAuxiliar;
    
}

//Split 







// va leyendo letra por letra y la va concatenando a una variable string cuando encuentre el patron 
// esa variable la pusheo en un arreglo y la viariable la pongo en vacio. 


function separacion(cadena, patron){
    let variable = "";
    let vector = [];

    for (let i=0; i< cadena.length; i++){
        if(cadena[i] == patron){
            vector.push(variable);
            variable = ""
        } else {
            variable += cadena[i];
        }

        if(cadena.length - 1 == i){
            vector.push(variable);
        }
    }

    return vector;
}

console.log(separacion(cadena, " "))


// function cambiarOrdenPalabras(cadena){
    
//     let cadenaAuxiliar = [];


//     for (let i=cadena.length - 1 ; i>=0; i--){
//         cadenaAuxiliar.push(cadena[i]);
//     }
    


//     return cadenaAuxiliar;
    
// }




//Join
// join("") > 
// array.join("") > "Holamundo" 

function juntar(arreglo, patron){
    let cadena = ""

    for(let i = 0; i< arreglo.length; i++ ){
        cadena += arreglo[i];
        if(arreglo.length -1 != i){
            cadena += patron;
        }

    }

    return cadena;

}

let vector = ["hola", "mundo"]

    
console.log(cambiarOrdenPalabras(cadena))
console.log(juntar(vector, "-"))



