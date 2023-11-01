
package paquete2;

public class Clase4 {
    
    private String atributoPrivate = "atributoPrivado";
    
    private Clase4(){
        System.out.println("Constructor privado");
    }
    
    //Creamos un constructor puclic para poder crear objetos
    public Clase4(String argumento){//Así se puede llamar al constructor vacio
        this();
        System.out.println("Constructor público");
    }
    
    //Método private
    private void modoPrivado(){
        System.out.println("Método privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}
