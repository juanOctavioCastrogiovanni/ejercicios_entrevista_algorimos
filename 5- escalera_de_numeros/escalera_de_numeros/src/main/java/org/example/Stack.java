package org.example;

import java.util.ArrayList;
import java.util.List;

//LIFO -> Last in First Out
public class Stack {
    private List<Integer> coleccion;

    public Stack(){
        coleccion = new ArrayList<>();
    }
    public Integer pop(){
        int indice = this.coleccion.size()-1;
        Integer valor = coleccion.get(indice);
        coleccion.remove(indice);
        
        return valor;
    }

    public void push(Integer valor){
        this.coleccion.add(valor);
    }

    public List getColeccion() {
        return coleccion;
    }

    public Integer getTamanio(){
        return this.coleccion.size();
    }
}
