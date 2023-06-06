package org.example;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class Departamento {
    private String nombre;
    private List<Curso> cursos;

    public Departamento(){
        cursos = new ArrayList<>();

    }
    
    public void agregarCurso(Curso curso){
        cursos.add(curso);
        
    }

}
