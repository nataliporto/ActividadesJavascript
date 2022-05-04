/*1)Escribe un programa de una sola línea que haga que 
aparezca en la pantalla un alert que diga “Hello World”:
alert("Hello World");

2)Escribe un programa de una sola línea que escriba en 
la pantalla un texto que diga “Hello World”:
document.write("Hello World");

3)Escribe un programa de una sola línea que escriba en 
la pantalla el resultado de sumar 3 + 5: 
document.write(3 + 5);

4)Escribe un programa de dos líneas que pida el nombre del 
usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”:
var nom = prompt("Ingrese su nombre de usuario");
document.write("Hola ", nom);

5)Escribe un programa de tres líneas que pida un número, 
pida otro número y escriba el resultado de sumar estos 
dos números:
var num1 = parseInt(prompt("Ingrese un número"));
var num2 = parseInt(prompt("Ingrese otro número"));
document.write(num1 + num2); 

6)Escribe un programa que pida dos números y escriba 
en la pantalla cual es el mayor: 
let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
if (num1 > num2) {
    document.write(num1, " es el mayor.");
} else {
    document.write(num2, " es el mayor.");
} 

7)Escribe un programa que pida 3 números y escriba 
en la pantalla el mayor de los tres. 3 posibles resoluciones:
let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
let n3 = parseInt(prompt("Ingrese otro número"));
if (n1 > n2 && n1 > n3) {
    document.write(n1, " es el mayor.");
     } else if (n2 > n1 && n2 > n3) {
        document.write(n2, " es el mayor.");
     } else {
        document.write(n3, " es el mayor.");
     } 

let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
let n3 = parseInt(prompt("Ingrese otro número"));
if (n1 > n2 && n2 >= n3) {
    document.write(n1, " es el mayor.");
     } else if (n2 > n1 && n1 >= n3) {
        document.write(n2, " es el mayor.");
     } else {
        document.write(n3, " es el mayor.");
     }

let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
let n3 = parseInt(prompt("Ingrese otro número"));
document.write("Elmayor es ", Math.max(n1, n2, n3));

8)Escribe un programa que pida un número y diga si es divisible por 2: 
let n = parseInt(prompt("Ingrese un número"));
if (n % 2 == 0) {
    document.write("El número ingresado es divisible por 2");
} else {
    document.write("El número ingresado no es divisible por 2");
}

9)Escribe un programa que pida una frase y escriba cuantas 
veces aparece la letra a: 
let string=prompt("Escriba una frase:");


10)Escribe un programa que pida una frase y escriba 
las vocales que aparecen:

11)Escribe un programa que pida una frase y escriba cuántas
de las letras que tiene son vocales:

12)Escribe un programa que pida una frase y escriba cuántas 
veces aparecen cada una de las vocales:

13)Escribe un programa que pida un número y nos diga si es 
divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es 
por uno de los cuatro):
let num = parseInt(prompt("Ingrese un número"));
if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
    console.log("Es divisible por 2, 3,5 o 7");
} 

14)Añadir al ejercicio anterior que nos diga por cual de 
los cuatro es divisible (hay que decir todos por los que
es divisible): 

let num = parseInt(prompt("Ingrese un número"));
if (num % 2 == 0) {
    console.log("Es divisible por 2");
}
if (num % 3 == 0) {
    console.log("Es divisible por 3");
}
if (num % 5 == 0) {
    console.log("Es divisible por 5");
}
if (num % 7 == 0) {
    console.log("Es divisible por 7");
}   

15) Escribir un programa que escriba en pantalla 
los divisores de un número dado: 
let num = parseInt(prompt("Ingrese un número"));
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        document.write(num, "es divisible por ", i + "<br>")
    }
}

16)Escribir un programa que escriba en pantalla los divisores 
comunes de dos números dados. 4 formas (sin función, creando mi función, usando la función Math.min, función Math.min dentro del for):
let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let min
if (num1 < num2) {
    min = num1
} else {
    min = num2
}
for (let i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        document.write(num1 + " y " + num2 + " son divisibles por " + i + "<br>")
    }
}


function minimo(n1, n2) {
    if (n1 < n2) {
        return n1
    } else {
        return n2
    }
}

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let min = minimo(num1,num2);
    for (let i=1; i<=min; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            document.write(num1 + " y " + num2 + " son divisibles por " + i + "<br>")
        }
    }



let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let min = Math.min(num1,num2);
    for (let i=1; i<=min; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            document.write(num1 + " y " + num2 + " son divisibles por " + i + "<br>")
        }
    }

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
    for (let i=1; i<=(Math.min(num1,num2)); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            document.write(num1 + " y " + num2 + " son divisibles por " + i + "<br>")
        }
    }


17) Escribir un programa que nos diga si un número dado es
primo (no es divisible por ninguno otro número que no sea 
él mismo o la unidad):
let n = parseInt(prompt("Ingrese un número"));
esPrimo = true
for (i=2; i<n; i++){
    if(n % i == 0){ 
        esPrimo=false;
    }
}
if(esPrimo){ 
    document.write(n + " es primo");
}

Aunque la mejor manera para este tipo de cosas es aprovechar y cortar el for cuando ya sabés el resultado,
entonces mejor hacer una función esPrimo y jugar con el return

let n = parseInt(prompt("Ingrese un número"));
function esPrimo(n){
    for(i=2; i<n; i++){
        if(n%i==0){         Es divisible
            return false    No es primo, retorna falso
        }
    }
    return true             Si llego hasta acá es que no entró nunca al if, ya que salió del for (no hay más iteraciones) y si hubiera entrado en alguno, hubiera retornado false
}                           Fin de la función

if (esPrimo(n)){
    document.write(n + " es primo.");
}

Es la misma estrategia en ambos casos: iterar hasta que haya un contraejemplo. Si no encuentro un contraejemplo es que es válido.



18)Pide la edad y si es mayor de 18 años indica que ya 
puede conducir:
let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
    console.log("Puede conducir");
}

19)Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 4-5: Insuficiente
● 6: Suficiente
● 7: Bien
● 8-9: Notable
● 10: Sobresaliente

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
else if (nota == 6) {
    console.log("Suficiente");
}
else if (nota == 7) {
    console.log("Bien");
}
else if (nota <= 9) {
    console.log("Notable");
}
else if (nota == 10) {
    console.log("Sobresaliente");
} 


20)Realiza un script que pida cadenas de texto hasta que 
se pulse “cancelar” (por ahora: "hasta que ingrese 0"). Al salir con “cancelar” (con 0) deben 
mostrarse todas las cadenas concatenadas con un guión:

21)Realiza un script que pida números hasta que se pulse 
“cancelar” (mejor por ahora: "hasta que ingrese 0"). Si no es un número deberá indicarse con un 
«alert» y seguir pidiendo. Al salir con “cancelar” deberá 
indicarse la suma total de los números introducidos:
Un compañero lo resolvió así:
let res = parseInt(0)
do {
    let num = parseInt(prompt("ingrese un número"));
    if (Number.isNaN(num)) {
        alert("No es un número")
    }else {
        res = res + num;
    }
} while (confirm("pulse aceptar para ingresar otro número o cancel para finalizar"));
document.write(res)

22)Realizar una página con un script que calcule el valor 
de la letra de un número de DNI (Documento Nacional de 
Identidad). El algoritmo para calcular la letra del dni
es el siguiente:
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división 
entera entre el número y el número 23.
● Según el resultado, de 0 a 22, le corresponderá 
una letra de las siguientes: (T, R, W, A, G, M, 
Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse 
con un alert y volver a preguntar.
● Deberá de repetirse el proceso hasta que el 
usuario pulse «cancelar».

23)Realiza un script que escriba una pirámide del 1 
al 30 de la siguiente forma : 
1
22
333
4444
55555
666666
…….

24.) Haz un script que escriba una pirámide inversa de 
los números del 1 al número que indique el usuario de 
la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1

25) Un script que escriba los números del 1 al 500, 
que indique cuáles son múltiplos de 4 y de 9 y que 
cada 5 líneas muestre una línea horizontal. 
Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 




Mariano Mendez16:12
for ( var i=100; i>=1;i--){
	console.log(i);
}
Mariano Mendez16:13
equivale a :

var i=100;
while(i>=1){
  console.log(i);
  i--;
}


// Unidad 2
//Ej. 1
function repetirSaludo(n){
    for ( let i=1; i<=n; i++){
        console.log("Bienvenido al curso de Full Stack");
    }
}
let n=parseInt(prompt("Ingrese un número")); 
repetirSaludo(n);

var  repetirSaludo= function(n){
    for ( let i=1; i<=n; i++){
        console.log("Bienvenido al curso de Full Stack");
    }
}
let n=parseInt(prompt("Ingrese un número")); 
repetirSaludo(n);

//Ej.2
function maximo(num1, num2){
    if (num1 > num2){
        return num1
    } else {
        retunr num2
    }
}

let n1= parseInt(prompt("Ingrese un número"));
let n1= parseInt(prompt("Ingrese otro número"));
document.write(maximo(num1, num2));



function max(x, y) {
    return x>y ? x : y
}
let n1 = parseInt(prompt ("Ingrese un número"));
let n2 = parseInt(prompt ("Ingrese otro número"));
document.write(max(n1,n2));



var max = (x, y) => x>y ? x : y;
let n1 = parseInt(prompt ("Ingrese un número"));
let n2 = parseInt(prompt ("Ingrese otro número"));
document.write(max(n1,n2));

*/