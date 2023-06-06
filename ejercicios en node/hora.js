// Se solicita un algoritmo en el que se ingrese una hora, minutos y
// segundos (hh-mm-ss) y devuelva un string de la hora convertida
// a formato 12 hrs y si es AM o PM. 

//1- pedir 3 valores, hora, minutos y segundos.
//2- Si la hora es > 12, debe restar 12 y mostrar PM.
//3 - si la hora es igual a 24 == debe ser 0.}


function cambiarHora(horas, minutos, segundos){
    let meridiano = "AM";
    
    if (horas >= 12){
        horas = horas - 12;
        meridiano = "PM";
    } else if(horas == 0) {
        horas = 12;
    }

    return "La hora en formato 12 horas es: " + horas + ":" + minutos + ":" + segundos + " " + meridiano;
}

console.log(cambiarHora(21,54,14))



























