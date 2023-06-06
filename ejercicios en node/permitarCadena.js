//abc => [abc,acb,bac,bca,cba,cab];

//bc => [bc,cb]

//

 

function permutarCadena(cadena){
    let arrayCadenasPermutadas = []
    
    if(cadena.length ==1){
        return [cadena]
    }

    for(let i = 0; i< cadena.length; i++){
       
        let cadenaAuxiliar;
        let caracter = cadena[i];


        cadenaAuxiliar =  cadena.substring(0, i) + cadena.substring(i+1, cadena.length)        
        // cadenaAuxiliar =  cadena.slice(0, i) + cadena.slice(i+1)        

        console.log(cadenaAuxiliar)

        let permutaciones = permutarCadena(cadenaAuxiliar);

        for(let j=0; j < permutaciones.length; j++){
            arrayCadenasPermutadas.push(caracter + permutaciones[j]);
        }

    }

    return arrayCadenasPermutadas;

}

console.log(permutarCadena("abcd"));







function permutarCadena1(cadena) {
    let resultado = [];
  
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena[i];
  
      if (resultado.indexOf(letra) !== -1) continue;
  
      let resto = cadena.slice(0, i) + cadena.slice(i + 1, cadena.length);
  
      for (let j = 0; j < resto.length; j++) {
        let permutacion = letra + resto[j];
        // resultado.push(permutacion);
  
        for (let k = 1; k < resto.length; k++) {
          let permutacion2 = permutacion + resto[k];
          resultado.push(permutacion2);
        }
      }
    }
  
    return resultado;
  }

  //abc = > a 
// resto => bc
// permutacion => ab
//   resultado => [abc]