package org.example;

public class CuentaBancaria {
    private String numeroDeCuenta;
    private Double saldo;
    
    public CuentaBancaria(String id, Double saldo){
        this.numeroDeCuenta = id;
        this.saldo = saldo;
    } 
    
    public Double getSaldo(){
        return this.saldo;
    }

    public String getNumeroDeCuenta() {
        return numeroDeCuenta;
    }


    @Override
    public String toString() {
        return "El saldo es: "+ this.getSaldo() +" de la cuenta: " + this.getNumeroDeCuenta() ;
    }
}
