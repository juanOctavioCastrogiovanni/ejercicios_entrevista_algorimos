package org.example;

import lombok.Getter;

@Getter
public class Estudiante {
    private String legajo;
    private String nombre;


    public Estudiante(String nombre, String legajo){
        this.nombre = nombre;
        this.legajo = legajo;
    }
}
