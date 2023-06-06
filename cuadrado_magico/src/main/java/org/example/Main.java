package org.example;

/*
acumuladorFilas += [i][j]
acumuladorColumnas += [j][i]
acumuladorDiagonalPrincipal += [i][j] // cuando i = j
forgrande{
forchico{
    sumasAcumuladores
}
aca se compara
}
[i][i] == [j][j]
(Filas)
cubo[0][0]
cubo[0][1]
cubo[0][2]

cubo[1][0]
cubo[1][1]
cubo[1][2]

cubo[2][0]
cubo[2][1]
cubo[2][2]

(columnas)
cubo[0][0]
cubo[1][0]
cubo[2][0]

cubo[0][1]
cubo[1][1]
cubo[2][1]

cubo[0][2]
cubo[1][2]
cubo[2][2]

(columnas)
cubo[0][0]
cubo[1][0]
cubo[2][0]

cubo[0][1]
cubo[1][1]
cubo[2][1]


[2][1][2]
[2][1][2]
[2][1][2]


[2][1][2][2]
[2][1][2][2]
[2][1][2][2]
[2][1][2][2]

*/


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Integer[][] cubo = new Integer[3][3];

        //cubo = [[2,7,6],[9,5,1],[4,3S,8]];
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < cubo.length; i++) {
            for (int j = 0; j < cubo[i].length; j++){
                System.out.println("iNGRESA UN NUMERO");
                String numero = scanner.nextLine();
                cubo[i][j] = Integer.parseInt(numero);
            }
        }
        System.out.println("Es magico? resulta que " + esMagico(cubo));

    }

    public static Boolean esMagico(Integer[][] matriz){
        Integer acumuladorFilas = 0;
        Integer acumuladorColumnas = 0;
        Integer acumuladorDiagonalPrincipal = 0;
        Integer acumuladorDiagonalSecundaria = 0;


        for(int i = 0; i < matriz.length; i++){
            acumuladorFilas = 0;
            acumuladorColumnas = 0;

            for(int j = 0; j < matriz[0].length; j++  ){
                acumuladorFilas += matriz[i][j];
                acumuladorColumnas += matriz[j][i];
                acumuladorDiagonalPrincipal += matriz[i][i];
                acumuladorDiagonalSecundaria += matriz[i][matriz.length-1 - i];

            }

            if (acumuladorFilas !=  acumuladorColumnas){
               return false;
            }

        }

        if ( acumuladorDiagonalPrincipal != acumuladorDiagonalSecundaria && acumuladorDiagonalSecundaria != acumuladorFilas){
            return false;
        }

        return true;
    }
}

