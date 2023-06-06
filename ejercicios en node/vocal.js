function conteoVocal(cadena){
    let contadorA = 0
    let contadorE = 0
    let contadorI = 0
    let contadorO = 0
    let contadorU = 0



    for(let i = 0; i < cadena.length; i++){
        switch(cadena[i].toLowerCase()){
            case "a": contadorA++;
            break;
            case "e": contadorE++;
            break;
            case "i": contadorI++;
            break;
            case "o": contadorO++;
            break;
            case "u": contadorU++;
            break;
        }
    } 
    
    return "La cadena tiene,\n A: " + contadorA + "\n E: " + contadorE + "\n I: " + contadorI + "\n O: " + contadorO + "\n U: " + contadorU;  
    
}

console.log(conteoVocal(process.argv[2]));

