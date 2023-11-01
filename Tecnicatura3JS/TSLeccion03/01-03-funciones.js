miFuncion(4,9);// Esto se conoce como hosting, llamar antes o después de definit la función

function miFuncion(a, b) {
    //console.log("Sumamos: "+ (a +b));
    return a + b;
}

//Llamado a la función
miFuncion(6, 8);

let resultado = miFuncion(4, 8);
console.log(resultado);

//Declaramos una función de tipo expreción o función anónima
let x = function(a, b){ return  a + b};//Necesita cierre con punto y coma
resultado = x(5, 6);//Al llamarla se pone variable y paréntesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la función: '+ (a + b));
})(9, 6); //Se llama a sí misma solo una vez

console.log(typeof miFuncion);
function miFuncionDos(a, b) {
    console.log(arguments);
    console.log(arguments.length);
}

miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sunarFuncionFlecha = (a,b) =>  a +b;
resultado = sunarFuncionFlecha(3,7);//asignamos el valor a una variable
console.log(resultado);

//Funcion de tipo expresión
let sumar = function(a = 4, b = 8){//valores por defecto
    console.log(arguments[0]);//muestra el párametro de: a
    console.log(arguments[1]);//muestra el párametro de b
   
    return a + b + arguments[2];
}
resultado = sumar(2,3,9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9)
console.log(respuesta);
function sumarTodo(){
    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];//Arguments es para arrglos        
    }
    return suma;
}

//Tipos primitivos
let k = 10;

function cambiarValor(a){//Paso por valor
    a = 20;
}
cambiarValor(k);//Fuera de la función, la variable conserva su valor original


//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona);

//Esta función si impacta sobre el mismo espacio de memoria del objeto, la variable p1 se destruye, pero los cambios que hizo se conservan
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto(persona);
console.log(persona);

//Lección 3 completa