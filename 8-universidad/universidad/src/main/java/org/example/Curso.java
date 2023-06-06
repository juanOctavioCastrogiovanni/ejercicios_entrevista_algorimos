package org.example;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class Curso {
    private String nombre;
    private List<Estudiante> estudiantes;

    public Curso(){
        estudiantes = new ArrayList<>();
    }

    public void agregarEstudiante(Estudiante estudiante){
        estudiantes.add(estudiante);
    }

    public List<Estudiante> getEstudiantes(){
        return estudiantes;
    }


}
