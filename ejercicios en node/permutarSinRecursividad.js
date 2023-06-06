//abc => [abc,acb,bac,bca,cba,cab];


//       j  j+1              j  j+1            j   -> i itera 3 veces
//abc => b   a   c   ->  b   c   a  -> b   c   a   -> 
//abc => c   b   a   ->  c   a   b  -> c   a   b   -> 
//abc => a   c   b   ->  a   b   c  -> a   b   c   -> 
//
//bc => [bc,cb]
//bc -> 1 -> b -> "" + c ->  [c] -> [bc];
//   -> 2 -> bc -> b + "" -> [b] -> [cb] 

 

function permutarCadena(cadena){
    let cadena1 = cadena.split("");
    let caracter;
    let cadenaResultante;
    let resultado = [];
    for(let i=0; i < cadena1.length; i++){
      for(let j=0; j < cadena1.length; j++){
        console.log(j)
        if(j != cadena1.length-1){
           caracter = cadena1[j];
           cadena1[j] = cadena1[j+1];
           cadena1[j+1] = caracter;
           cadenaResultante = cadena1.join("")
           resultado.push(cadenaResultante);
        }
      }
    }
  
    return resultado
  }
  
  // abc -> bac
  
  console.log(permutarCadena("abcde"))
  
    //abc = > a 
  // resto => bc
  // permutacion => ab
  //   resultado => [abc]