// dado unicamente un array ordenado el metodo busqueda binaria, divide en 2 el arreglo y analiza la primera
// parte, compara el valor del elemento con del arreglo no esta el elemento vuelve a dividir en 2, y repite el proceso.
4

     //     | |  
// [1,2,3,4,5,6] 
let arreglo = [1,2,3,4,5,6]
let valor = 2

console.log("la posicion es: " + busquedaBinaria(arreglo, valor));
// console.log(Math.round(3.5));

function busquedaBinaria(arreglo, valor){
    let inicio = 0;
    let fin = arreglo.length - 1 
    
    
    do {
        mitad = Math.floor((inicio + fin) / 2);
        
       if( valor === arreglo [ mitad ] ){
        
        return mitad;

       } else if(valor < arreglo [mitad]){
        
        fin = mitad - 1; 


       } else if(valor > arreglo [mitad]){
        
        inicio = mitad + 1; 
        
       }


    } while ( inicio <= fin );

    return -1;
}