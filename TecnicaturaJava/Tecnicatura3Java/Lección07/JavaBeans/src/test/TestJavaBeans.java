
package test;

import domain.Persona;


public class TestJavaBeans {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setNombre("Lucas");
        persona.setApellido("Corvalán");
        System.out.println("persona = " + persona);
        
        System.out.println("Persona nombre: "+persona.getNombre());
        System.out.println("Persona apellido: "+persona.getApellido());
    }
}
