/*uso de variables
var nombre = 'Hernan';
console.log (nombre);
console.log(typeof(nombre));

var edad = 30;
console.log (edad);
console.log (typeof(edad));

var sueldo = 1900.99;
console.log (sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));
//hola q tal este es un comentario
asdasd123123

var puesto;
console.log (puesto);
puesto = null;
console.log (puesto);
*/
//operadores matematicos
/*
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2021;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual-edadAna;
yearMaria = yearActual-edadMaria;

console.log (diferenciaEdad);
console.log (sumaEdades);
console.log ('Año en el que nacio Ana'+ yearAna);
console.log ('Año en el que nacio Maria'+ yearMaria);
console.log (yearActual*5);
console.log(yearActual/5);
*/
//operadores logicos, unarios y de asignacion
//logicos <> <= >= == negacion !

var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna > edadMaria);

console.log (mayorAna);

// operadores unarios, ++incremento, --decremento

edadAna++;

console.log(edadAna);

//operadores de asignacion += -= += /= %=

var a = 11;
var b = 5;

var c= a % b; 

console.log (c);

a+=b; //a = a+b
