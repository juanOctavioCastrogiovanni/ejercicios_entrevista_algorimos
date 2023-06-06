// 1- ingresa una cadena como parametro.
// 2- verifica si la cadena tine mas de un caracter, luego un @ luego mas de un caracter, un . y otro caracter.cadena


function esCorreo(correo){
        let pila = [".","@"];
        let servidor;
        
        for(let i=0; i<correo.length; i++){
            if(correo[i] == pila[pila.length-1] && i==0){
                return false;
            }

            if(correo[i] == pila[pila.length-1] && i==servidor+1){
                return false;

            } else if(correo[i] == pila[pila.length-1]){
                pila.pop();
                servidor = i;
            } 
            
     }

     return pila.length == 0;

}

console.log(esCorreo("aa@sl.ajj"))
