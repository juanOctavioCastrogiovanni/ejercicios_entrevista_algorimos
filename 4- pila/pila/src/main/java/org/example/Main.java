package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import static java.lang.Integer.parseInt;
import static java.util.Arrays.asList;

//Dado un tiempo en minutos, calcular su equivalente en días y horas. Por ejemplo, si el
//usuario ingresa 1600 minutos, el sistema debe calcular su equivalente: 1 día, 2 horas.
public class Main {
    public static void main(String[] args) {

        Cola pila = new Cola();

        pila.push(1);
        pila.push(6);
        pila.push(15);
        pila.push(24);
        pila.pop();

        System.out.println("La pila con los numeros agregados son: "+ pila.getLista());


    }
}