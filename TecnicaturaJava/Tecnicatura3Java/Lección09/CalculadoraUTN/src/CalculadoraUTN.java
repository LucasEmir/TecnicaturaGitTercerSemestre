import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ //Cicli infinito
            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4){

                    ejecutarOperacion(operacion, entrada);

                }//Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; //Rompe el ciclo y sale
                }
                else {
                    System.out.println("Opción erronea: "+operacion);
                }
                //Imprimimos un salto de línea antes de repetie el menú
                System.out.println();
            } catch (Exception e) { //Fin del try, comienzo del catch
                System.out.println("Ocurrio un error: "+e.getMessage());
                System.out.println();
            }
        } // Fin While

    } //Fin del main

    private static void mostrarMenu() {
        //Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicación
                    4. División
                    5. Salir
                    """);
        System.out.print("Operación a realizar? ");
    } // Fin método mostrar menu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado;
        switch (operacion){
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("resultado = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("resultado = " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("resultado = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("resultado = " + resultado);
            }
            default -> System.out.println("Opción erronea: "+operacion);
        }// Fin switch
    } //Fin método ejecutarOperacion


}// Fin de la clase
