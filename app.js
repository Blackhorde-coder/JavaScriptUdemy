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
/*
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
*/

//sentencias if else
/*
var nombre = 'HERNAN';
var esCasado = false;

if(esCasado == true)
{
    console.log(nombre + ' es casado.');
}
else
{
    console.log(nombre + ' es soltero.')
}
*/
//sentencias logicas NOT, AND & OR
var nombre = 'HERNAN';
var edad = 60;

//edad < 12 es un niño
//edad >11 , es < 18 es un adolencente
// edad > 17 es < 60 es un adulto
// edad > 60 es un anciano

if(edad<12)
{
    console.log(nombre + ' es un niño.');
}
else if((edad>11)&&(edad<18))
{
    console.log (nombre + ' es un adolencete');
}
else if((edad>17)&&(edad<60))
{
    console.log (nombre + ' es un adulto');
}
else
{
    console.log (nombre + ' es un anciano');
}


