function esAnagrama (cadena1, cadena2){
    cadena1 = ordenar(cadena1);
    cadena2 = ordenar(cadena2);

    return cadena1 === cadena2;

}

function ordenar(cadena){
    let aux;

    cadena = cadena.toLowerCase().split("");

    for(let i=0; i<cadena.length; i++){
        for(let j=i+1; j < cadena.length; j++){
            if(cadena[i] > cadena[j]){
                aux = cadena[i];
                cadena[i] = cadena[j];
                cadena[j] = aux
            } 
        }
    }

    return cadena.join("").trim();
}

console.log(esAnagrama("roma", "amofr"));

