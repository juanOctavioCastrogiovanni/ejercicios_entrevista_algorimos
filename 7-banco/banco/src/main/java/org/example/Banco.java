package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Banco {
    private List cuentasBancarias;

    public Banco(){
        cuentasBancarias = new ArrayList<>();
    }

    public List<CuentaBancaria> getCuentasBancarias() {
        return cuentasBancarias;
    }
    
    public void agregarCuentaBancaria(CuentaBancaria cuentanNueva){
        cuentasBancarias.add(cuentanNueva);
    }
    
    public void eliminarCuenta(CuentaBancaria cuentaAEliminar){
        cuentasBancarias = Arrays.asList(cuentasBancarias.stream().filter(cuenta -> !cuenta.equals(cuentaAEliminar)));
    }
}
