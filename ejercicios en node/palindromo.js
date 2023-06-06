// 1 - el string darlo vuelta.darlo
// 2 - comparar si es igual que el original.

const palindromo = palabra => {return (ordenamiento(palabra)==palabra ) ? true : false;}

const ordenamiento = palabra => {
    let palabraInvertida="";

    for(let i=palabra.length-1; i>=0 ;i--){
        palabraInvertida += palabra[i];
    }

    return palabraInvertida;
}



console.log(palindromo("camimac"))