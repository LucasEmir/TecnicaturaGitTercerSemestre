
package test;

import domain.*;

public class TestConversionObjetos {
    
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO); 
        //System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles()); //Si queremos acceder a método escritor
        //empleado.getTipoEcritura(); --> Esta forma no es correcta, da error
        
        //Downcasting
        //((Escritor)empleado).getTipoEscritura(); //Tenemos dos opciones: esta es una
        Escritor escritor = (Escritor)empleado; //Esta es la segunda opción
        escritor.getTipoEscritura();
        
        //Upcasting
        Empleado empledo2 = escritor;
        System.out.println(empledo2.obtenerDetalles());
        
        
        
    }
    
}
