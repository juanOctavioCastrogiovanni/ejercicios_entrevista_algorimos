package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Integer.parseInt;
import static java.util.Arrays.asList;


public class Main {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);
        String numeroCuenta;

        Banco santander = new Banco();


        do{
            System.out.println("Digite el numero de cuenta que desea agregar");
            numeroCuenta = scanner.nextLine();

            if(numeroCuenta.equals("0")){
                continue;
            }

            System.out.println("Digite el saldo de cuenta que desea agregar");
            Double saldo = scanner.nextDouble();
            scanner.nextLine();

            CuentaBancaria cuentaBancaria = new CuentaBancaria(numeroCuenta, saldo);

            santander.agregarCuentaBancaria(cuentaBancaria);

        } while (!numeroCuenta.equals("0"));

        for (CuentaBancaria cuenta: santander.getCuentasBancarias()){
           // System.out.println("El saldo es: "+ cuenta.getSaldo() +" de la cuenta: " + cuenta.getNumeroDeCuenta() );
            System.out.println(cuenta);
        }

        // santander.getCuentasBancarias().stream().forEach(cuentaBancaria -> System.out.println(cuentaBancaria));

        //for (int i=0; i<santander.getCuentasBancarias().size(); i++){
          //  System.out.println(santander.getCuentasBancarias().get(i));
        //}

    }
}