
// *Dada una cadena A y una cadena B, determinar si la cadena A contiene a B.
// 

"abcdsfsdfsdfdefsdfsdsdfggsdfs", "def"

function esSubcadena(cadenaA, cadenaB){
   
    for(let i=0; i<cadenaA.length; i++){
        if( coinciden(cadenaA, cadenaB, i) ){
            return true
        }
    }
    return false
}

function coinciden(a,b,j){
    for(let i=0; i<b.length; i++){
        if(a[j+i] != b[i]){
            return false;
        }
    }
    return true
}



console.log(esSubcadena("abcdsfsdfsdfdefsdfsdsdfggsdfs", "def"))






