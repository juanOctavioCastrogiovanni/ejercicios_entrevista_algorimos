package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import static java.lang.Integer.parseInt;
import static java.util.Arrays.asList;

/*
23. Construya un programa que lea 5 palabras de mínimo 3 y hasta 5 caracteres y, a medida
que el usuario las va ingresando, construya una “sopa de letras para niños” de tamaño de
20 x 20 caracteres.
Las palabras se ubicarán todas en orden horizontal en una fila que
será seleccionada de manera aleatoria. Una vez concluida la ubicación de las palabras,
rellene los espacios no utilizados con un número aleatorio del 0 al 9. Finalmente imprima
por pantalla la sopa de letras creada.
Nota: Para resolver el ejercicio deberá investigar cómo se utilizan las siguientes funciones
de Java substring(), Length() y Math.random().
*/



public class Main {
    public void main(String[] args) {

        String palabra;
        String[] palabrasIngresadas = new String[5];
        Integer contador = 0;

        do {
            do {
                System.out.println("ingrese la palabra");
                Scanner scanner = new Scanner(System.in);

                palabra = scanner.nextLine();


            } while (!this.validacion(  palabra ));

            palabrasIngresadas[contador] = palabra;
            contador++;

            System.out.println(palabra);
        }while (  contador < 5 );



    }

*/
    private static void sopa(String[] palabras){
        String[][] sopa = new String[20][20];

        //int fila = (int) Math.random() * 10 + 10;

        for (int i = 0; i < 5; i++){

            int fila = (int) Math.random() * 10 + 10;

            String palabraActual = palabras[i];

            for (int j = 0; j < palabraActual.length(); j++){
               // sopa[fila][j] = palabraActual[j];
            }


        }










    }

    private static boolean validacion(String palabra){

        if (palabra.length() >= 3 && palabra.length() <= 5 ){
            return true;
        }

        return false;

    }
}