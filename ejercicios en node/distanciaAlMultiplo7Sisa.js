// Ejercicio A1 (Básico)
// Desarrollar una función que tome un listado de números enteros y los ordene de
// acuerdo al siguiente criterio:
// 1. Descendentemente, por la distancia al múltiplo de 7 más cercano.
// 2. Si dos números tienen la misma distancia al múltiplo de 7 más cercano,
// ascendentemente por su valor absoluto.

// modulo -> distancia (7)
// 44%7=3


function ordenarPorDistanciaMultiploSiete(arreglo) {
    let aux;

    for (let i = 0; i < arreglo.length; i++) {

        for (let j = i + 1; j < arreglo.length; j++) {

            if (valorAbsoluto(arreglo[i] % 7) == valorAbsoluto(arreglo[j] % 7)) {
                if (valorAbsoluto(arreglo[i]) > valorAbsoluto(arreglo[j])) {
                    aux = arreglo[i]
                    arreglo[i] = arreglo[j]
                    arreglo[j] = aux
                }
            } else if (valorAbsoluto(arreglo[i] % 7) < valorAbsoluto(arreglo[j] % 7)) {
                aux = arreglo[i]
                arreglo[i] = arreglo[j]
                arreglo[j] = aux
            }


        }

    }


    return arreglo
}

function valorAbsoluto(valor){return (valor<0)? valor * -1 : valor}

console.log(ordenarPorDistanciaMultiploSiete([44, 37, 24, 50, 14, -87]))

// Ejemplo:
// Entrada: 37, 24, 50, 14, 44, -87
// Resultado: 24, -87, 37, 44, 50, 14
// Número Distancia
// 24 3
// -87 3
// 37 2
// 44 2
// 3
// Número Distancia
// 50 1
// 14 0
// Para este ejercicio le pedimos que nos entregue:
// 1. Una pieza de código que resuelva el problema, escrita en el lenguaje en el
// que se sienta cómodo (preferimos Java, de ser posible). El código que nos
// entregue debe estar listo para ser compilado y ejecutado.
// 2. Los casos de prueba que haya empleado para verificar la corrección de la
// solución. Puede ser como una clase de unidad de test (como JUnit), como
// invocaciones a la función que resuelva el ejercicio (en un método main, por
// ejemplo), o como un archivo de texto anexo