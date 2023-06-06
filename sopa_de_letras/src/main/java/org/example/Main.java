package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import static java.lang.Integer.parseInt;
import static java.util.Arrays.asList;

public class Main {
    public static void main(String[] args) {
        String palabra;
        String[] palabrasIngresadas = new String[5];
        Integer contador = 0;

        do {
            do {
                System.out.println("ingrese la palabra");
                Scanner scanner = new Scanner(System.in);

                palabra = scanner.nextLine();


            } while (!validacion(  palabra ));

            palabrasIngresadas[contador] = palabra;
            contador++;

            System.out.println(palabra);
        }while (  contador < 5 );


        sopa(palabrasIngresadas);
    }


    public static void mostrarArray(String[] array){
        for(int i = 0; i <array.length; i++){
            //System.out.println(array[i]);
            String palabra = array[i];
            System.out.println(palabra.substring(1,2));
        }
    }

    private static void sopa(String[] palabras){
        String[][] sopa = new String[20][20];

        //int fila = (int) Math.random() * 10 + 10;

        for (int i = 0; i < 20; i++){

            for (int j = 0; j < 20; j++){

                    Integer numeroEntero = (int) (Math.random() * 10);
                    sopa[i][j] =  numeroEntero.toString();

            }

        }

        for (int i = 0; i < 5; i++){

            Random random = new Random();

            int fila = random.nextInt(20);

            String palabraActual = palabras[i];

            for (int j = 0; j < palabraActual.length(); j++){
                sopa[fila][j] = palabraActual.substring( j , j+1 );
            }

        }

        for (int i = 0; i < 20; i++){

            for (int j = 0; j < 20; j++){

                System.out.print(sopa[i][j] + "  ");

            }
            System.out.println("");

        }


    }
    private static boolean validacion(String palabra){

        if (palabra.length() >= 3 && palabra.length() <= 5 ){
            return true;
        }

        return false;

    }
}