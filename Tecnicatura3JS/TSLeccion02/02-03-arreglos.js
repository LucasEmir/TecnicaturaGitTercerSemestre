//Creación de Array o arreglos
//let autos = new Array('Ferrari','Renault', 'BMW'); Sintaxis vieja

const autos = ['Ferrari','Renault', 'BMW'];
console.log(autos);

//Recorrer los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {    
    console.log(i+' : '+ autos[i]);    
}

//Modificar los elementos del arreglo
autos[1] = 'Volvo';

//Agregar nuevos valores
autos.push('Peugeot'); //Agregamos el elemento al final

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';

//Tercera forma de agregar elementos teniendo CUIDADO
autos[7] = 'Renault';

//Cómo preguntar si es un Array o un Arreglo
console.log(Array.isArray(autos));//Devuelve un resultado booleano

console.log(autos instanceof Array);//Preguntamos si la variable es una instancia de la clase Array, también devuelve un booleano.