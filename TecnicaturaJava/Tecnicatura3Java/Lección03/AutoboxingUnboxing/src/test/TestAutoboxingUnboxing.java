
package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clase envolventes o Wrapper
        /*
            Clases envolventes de tipos primitivos
            int = la clase envolvente es Integer
            long = la clase envolvente es Long
            float = La clase envolvente es Float
            double = La clase envolvente es Double
            boolean = La clase envolvente es Boolean
            byte = La clase envolvente es Byte
            char = La clase envolvente es Character
            short = La clase envolvente es Short
        */
        int enteroPrim = 10;//Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10;//Tipo objet con clase integer
        System.out.println("entero = " + entero.doubleValue());//Autoboxing (lo convertimos a primitivo)
      
        int entero2 = entero;//Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
