let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 28,
    idioma: 'ES',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //Método o función 
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+' edad: '+this.edad
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '2525363625';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo

//for in
for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

persona.apellido = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
console.log(persona);

console.log('Eliminamos una propiedad');
delete persona.apellido; //Eliminamos un atributo
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: la más sencilla: concatenando cada valor de la propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+' '+persona.telefono);

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for (const nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizando Json.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);


console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo','Lopez','lopezleo@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
padre.telefono = 5455454545;//Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto());//Utilizamos la función
let madre = new Persona3('Laura','Contrera','lauracontrera@gmail.com');
console.log(madre);
console.log(madre.telefono);//la propiedad no esta definida
console.log(madre.nombreCompleto());

//Distintas formas de crear objetos
//Caso número 1
let miObjeto = new Object();// Opcion formal
//Caso número 2
let miObjeto2 = {};//Opción breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal
//Caso String 2
let miCadena2 = 'Hola'; //Sintaxis simplificada y recomendada

//caso con números 1
let miNumero = new Number(1);//formal
//Caso con números 2
let miNumero2 = 1; //recomendada

//Caso boolean 1
let mibollean = new Boolean(false); //Formal
//Caso boolean 2
let miBoolean2 = false;//Recomendada

//Caso arreglo 1
let miArreglo = new Array(); //Formal
let miArreglo2 = []; //Recomendada

//Caso función 1
let miFuncion = new function () {}; //To-do despues de new es considerado objeto
//Caso función 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada

///////////////////////////////////////
//Uso del prototype
Persona3.prototype.telefono = '2615555555';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '53535353535';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreComplero2: function(titulo, telefono) {
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreComplero2('Lic.', '549456264654'));
console.log(persona4.nombreComplero2.call(persona5, 'Ing.','56645654546'));

//Método Apply
let arreglo = ['Ing.','54264641655'];
console.log(persona4.nombreComplero2.apply(persona5, arreglo));
 