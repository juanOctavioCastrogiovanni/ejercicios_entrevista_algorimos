package org.example;

import java.util.ArrayList;
import java.util.List;

public class Universidad {
    private List<Departamento> departamentos;

    public Universidad(){
        departamentos = new ArrayList<>();

    }

    public void agregarCursosEnDepartamento(Departamento departamento, Curso curso){
        departamento.agregarCurso(curso);
    }

    public void agregarDepartamento(Departamento departamento){
        departamentos.add(departamento);

    }


}
