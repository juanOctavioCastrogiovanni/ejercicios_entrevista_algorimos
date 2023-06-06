package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Integer.parseInt;
import static java.util.Arrays.asList;


/*
Crear una clase "Universidad" que tenga una lista de departamentos.
        Cada departamento debe ser una instancia de la clase "Departamento",
        que tiene atributos de nombre y lista de cursos. Cada curso debe ser una
        instancia de la clase "Curso", que tiene atributos de nombre y lista de estudiantes.

        La clase "Universidad" debe incluir métodos para agregar un departamento, agregar un curso a un departamento,
        agregar un estudiante a un curso y mostrar la lista de estudiantes de un curso específico.
*/


public class Main {
    public static void main(String[] args) {

        Universidad universidad = new Universidad();
        Departamento departamento = new Departamento();
        Curso curso = new Curso();
        Estudiante estudiante = new Estudiante("juan", "241223");
        Estudiante estudiante1 = new Estudiante("marcos", "241323");
        Estudiante estudiante2 = new Estudiante("pepe", "234123");

        curso.agregarEstudiante(estudiante);
        curso.agregarEstudiante(estudiante2);
        curso.agregarEstudiante(estudiante1);
        departamento.agregarCurso(curso);
        departamento.setNombre("fisica");
        curso.setNombre("fisica 1");
        universidad.agregarDepartamento(departamento);

        System.out.println("Los departamentos para la universidad son: "  + departamento.getNombre());
        System.out.println("Estios son los alumnos del curso " + curso.getNombre());
        for(Estudiante estudianteGenerico: curso.getEstudiantes()){
            System.out.println("El nombre es: " + estudianteGenerico.getNombre());
        }
    }
}