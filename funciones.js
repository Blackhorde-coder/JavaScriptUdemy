/*
var sumar = function(a,b,c=3)
{
    return a+b+c;
}
var result = sumar (4, 5, 8);
console.log (result);


//funciones recursivas

var factorial = function (n)
{
    if((n==0)||(n==1))
    return 1;
    else
    return (n * factorial (n-1));
}

console.log(factorial(12));


// arreglos

var nombres = ['hernan', 'paula', 'luis', 'marcos'];
var vegetales = new Array ('tomate', 'lechuga', 'pepino');

console.log(nombres[3]);

nombres[0] = 'jose';
vegetales[2]= 'nabo';

console.log (nombres[0]);
console.log (vegetales[2]);
*/
var nombres = ['hernan', 'paula', 'luis', 'marcos'];
var vegetales = new Array ('tomate', 'lechuga', 'pepino');

//console.log(nombres.length);
for(var i=0; i<= nombres.length-1; i++)
{
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento,indice) 
{
    console.log (elemento, indice);    
})

console.log(nombres);
nombres.push ('pedro');
console.log(nombres);
nombres.unshift('marta');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);
var pos = nombres.indexOf('hernan');
console.log (pos);
nombres.splice(2,2);
console.log(nombres);


