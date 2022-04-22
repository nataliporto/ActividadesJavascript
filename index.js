/*Escribe un programa de una sola línea que haga que 
aparezca en la pantalla un alert que diga “Hello World”*/
alert("Hello World");

/*Escribe un programa de una sola línea que escriba en 
la pantalla un texto que diga “Hello World”*/
document.write("Hello World");

/*Escribe un programa de una sola línea que escriba en 
la pantalla el resultado de sumar 3 + 5 */
document.write(3 + 5);

/*Escribe un programa de dos líneas que pida el nombre del 
usuario con un prompt y escriba un texto que diga “Hola nombreUsuario” */
var nom = prompt("Ingrese su nombre de usuario");
document.write("Hola ", nom);

/*Escribe un programa de tres líneas que pida un número, 
pida otro número y escriba el resultado de sumar estos 
dos números*/
var num1 = parseInt(prompt("Ingrese un número"));
var num2 = parseInt(prompt("Ingrese otro número"));
document.write(num1 + num2);

/*13
/*let num=parseInt(prompt("Ingrese un número"));
if (num % 2 ==0 || num % 3 ==0 || num % 5==0 || num % 7==0){
    console.log("Es divisible por 2, 3,5 o 7")
}*/

/*14
let num=parseInt(prompt("Ingrese un número"));
if (num % 2 ==0){
    console.log("Es divisible por 2")
}
if (num % 3 ==0){
    console.log("Es divisible por 3")
}
if (num % 5 ==0){
    console.log("Es divisible por 5")
}
if (num % 7 ==0){
    console.log("Es divisible por 7")
} */

/*15
let num=parseInt(prompt("Ingrese un número"));
for (let i=1; i<=num; i++){
    if (num%i==0){
        document.write(num, "es divisible por ", i + "<br>")
    }
} */

/*18
let edad=parseInt(prompt("Ingrese su edad"));
if (edad >=18){
    console.log("Puede conducir")
}*/

/*19*/
let nota = parseFloat(prompt("Ingrese nota"));
while (nota <= 0 || nota > 10) {
    console.log("Nota inválida")
    nota = parseInt(promt("Ingrese nota"));
}
if (nota <= 3) {
    console.log("Muy deficiente");
} else if (nota <= 5) {
    console.log("Insuficiente");
}
else if (nota <= 6) {
    console.log("Suficiente");
}
else if (nota <= 7) {
    console.log("Bien");
}
else if (nota <= 9) {
    console.log("Notable");
}
else if (nota <= 10) {
    console.log("Sobresaliente");
}
