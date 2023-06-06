package org.example;

import java.util.Scanner;

import static java.lang.Integer.parseInt;

//Dado un tiempo en minutos, calcular su equivalente en días y horas. Por ejemplo, si el
//usuario ingresa 1600 minutos, el sistema debe calcular su equivalente: 1 día, 2 horas.
public class Main {
    public static void main(String[] args) {
        int horas;
        int dias;

        Scanner lectura = new Scanner (System.in);

        System.out.println("Ingrese los minutos: ");

        String minutos = lectura.next();

        int min = parseInt(minutos);

        dias = (min/60) / 24;

        horas = (min/60) % 24;

        System.out.println("El equivalente es: " + dias + " dias, " + horas + " horas.");

    }
}