package org.example;
import java.util.ArrayList;
import java.util.List;

//FIFO
//pgetLista, getTamanio;
public class Cola {
    private List<Integer> lista;
    
    public Cola(){
        lista = new ArrayList<>();
    }
    
    public Integer pop(){
        Integer elemento = lista.get(0);
        lista.remove((int) 0);
        return elemento;
    }
    
    
    public void push(Integer elemento){
        lista.add(elemento);
    }
    
    public List getLista(){
        return this.lista;
    }
    
    public Integer getTamanio(){
        return this.lista.size();
    }
    
    
    
    
    
}
