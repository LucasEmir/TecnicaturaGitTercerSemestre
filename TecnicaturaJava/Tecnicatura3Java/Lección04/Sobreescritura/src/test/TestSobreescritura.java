
package test;

import domain.*;

public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        Gerente gerente1 = new Gerente("Juan",5000,"Sistemas");
        //System.out.println("gerente = " + gerente1.obtenerDetalles());
        imprimir(gerente1);
        
    }
    
    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);
    }
    
   
}
