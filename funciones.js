/*
var sumar = function(a,b,c=3)
{
    return a+b+c;
}
var result = sumar (4, 5, 8);
console.log (result);
*/

//funciones recursivas

var factorial = function (n)
{
    if((n==0)||(n==1))
    return 1;
    else
    return (n * factorial (n-1));
}

console.log(factorial(12));

