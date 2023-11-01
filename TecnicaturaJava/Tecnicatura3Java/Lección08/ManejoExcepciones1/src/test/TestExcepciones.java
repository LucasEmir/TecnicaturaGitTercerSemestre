package test;

import static aritmetica.Aritmetica.division; //Importamos el método emir
import excepciones.OperacionExcepcion;

public class TestExcepciones {

    public static void main(String[] args) {
        int resultado = 0;
        try {
            resultado = division(10, 0);
            
        }catch(OperacionExcepcion e){
            System.out.println("Ocurrió un error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
        } catch(Exception e){
            System.out.println("Ocurrió un error");
            e.printStackTrace(System.out); //se conoce como pila de excepciones
            System.out.println(e.getMessage());
        } 
        finally{
            System.out.println("Se reviso la división entre cero");
        }
        System.out.println("La varibale de resultado tiene como valor: "+resultado);
    }
}
