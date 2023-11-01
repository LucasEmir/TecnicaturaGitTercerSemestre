
package domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{//Bloque de inicialización estático, es el primero en ejecutarse
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersonas;
        //idPersona = 10; No es estático por eso renemos un error
    }
    
    {//Bloque de inicialización NO estático(contexto dinámico)
        System.out.println("Ejecución del bloque no estático");
        this.idPersona = Persona.contadorPersonas++;//Incrementamos el atributo
    }
    
    //Los atributos de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecucuón del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
    
}
