// Validar fecha: Escribe una función que tome una cadena que representa una fecha en formato 
// "dd/mm/aaaa" y verifique si la fecha es válida.

//1- Separar la fecha en "/".
//2- Guardar cada posicion en dia, mes, anio.
//3- Verificar si el anio es bisiesto (si es)
//4- Luego verificar que numero de mes es, tambien si es mayor a 12 o es menor a uno retorna falso.
//5- si es bisiesto significa que febrero tiene 29, sino 28.
//6- Verificar si es menor a 1 o si es mayor del maximo dependiendo del mes retorna falso. 



function fechaValida(fechaString){
    let fecha = fechaString.split("/");
    let anio = parseInt(fecha[2]);
    let mes = parseInt(fecha[1]);
    let dia = parseInt(fecha[0]);
    
    console.log(anio, mes, dia)
    
    if(mes == 4||mes == 6||mes == 9|| mes == 11){
        return dia <= 30 && dia >= 1; 
    }else if(mes == 1|| mes == 3|| mes == 5|| mes == 8|| mes == 10|| mes == 12){
        return dia <= 31 && dia >= 1;
    }else if(mes == 2) {
        if(esBisiesto(anio)){
            return dia <= 29 && dia >= 1;
        }else{
            return dia <= 28;
        }
    }else{
        return false;
    }

    // switch(mes){
    //     case (4||6||9||11):
    //         return dia <= 30 && dia >= 1;

    //     case(1||3||5||8||10||12):
    //         return dia <= 31 && dia >= 1;

    //     case(2):
    //         if(esBisiesto(anio)){
    //             return dia <= 29 && dia >= 1;
    //         }else{
    //             return dia <= 28;
    //         }

    //     default:
    //         return false;
    // }
    
    
}



console.log(fechaValida("28/12/1996"))

// 1	31
// 2	28/29
// 3	31
// 4	30
// 5	31
// 6	30
// 7	31
// 8	31
// 9	30
// 10	31
// 11	30
// 12	31

// tienen 30 dias
// 4 6 9 11

// tienen 31 dias
// 1 3 5 8 10 12


// bisiesto
// // Año bisiesto es el divisible entre 4,
// //  salvo que sea año secular -último de cada siglo,
// //  terminado en «00»-,
//  en cuyo caso también ha de ser divisible entre 400.


function esBisiesto(anio){
    return (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
}













