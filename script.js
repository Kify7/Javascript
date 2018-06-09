// tipos de datos
/* 

Datos NATIVOS :

string  cadena de Texto
number  numero
boolean true or false

undefined
null
*/

/* alert("Hello World");     */

/* Variables */

/* var nombre = "Kify"
var edad = 30;
var teGustaElAnime = true; 
 */
/* Estructura de Datos */

/* Arreglos: los arreglos empiezan en cero  */
/* var x = ["Paola","Marco","Karla","Edgar","Claudia","Margarita","Josue"];
alert(x[2]); */

/* Jsons u Objetos {} */

/* var alumno = { "nombre": "Kify","edad": 30,"telefono": 56575 };

alert (alumno["nombre"]);
alert (alumno.nombre = "wuwu");

 */

 /*  console.log() USANDO INSPECCION EN NAVEGADOR*/
 
// console.log (20 == 20);
// console.log (20 = 21);
// console.log (20 = 22);


// var nombre = "kify";
// console.log(nombre == "kify");

// var edad = 20
// console.log(edad = 20);
// console.log(edad = 40);
// console.log(edad = 15);
// console.log(edad = 17);
// console.log(edad = 30);

// console.log(edad > 18 && edad < 30);
// console.log(edad > 18 || edad < 30);

/* var edad1 = 15
var edad2 = 13
var edad3 = 40
var edad4 = 35
var edad5 = 128

console.log(edad1 > 18 && edad1 < 30);
console.log(edad2 > 18 && edad2 < 30);
console.log(edad3 > 18 && edad3 < 30);
console.log(edad4 > 18 && edad4 < 30);
console.log(edad5 > 18 && edad5 < 30);

 */

/* Declarar Variable en funcion : las funciones son pedazos de código que podemos mandar llamar */

/* function comparar () {
    alert("salu2");
}

 /* EJECUTAR FUNCIONES */

// comparar()

/* Declarar Variables */

/* var edad1 = 15;
var edad2 = 16;
var edad3 = 25; */
 
/* Declarar Funcion */

/* function comparar(x) { console.log( x > 18 && x < 30);
} */

/* Ejecutar Funciones */

/* comparar(edad1);
comparar(edad2);
comparar(edad3);
comparar(edad1 + edad2); */

/* Se Pueden Declarar Variables dentro de las Funciones */

/* function comparar(x) { console.log( x > 18 && x < 30);
    var zz = 15
}
 */

 /* Funciones Matemáticas */

/*  function resta (x, y){
     return x-y
 }

 var x = resta (10, 4)
console.log(x);

 */


 /* CONDICIONALES */

/* if (true)
console.log("hey");
console.log("yup");
console.log("buu");
 */
// si el primer if e sverdadero, los demás if no se ejecutaran

/* var edad = 20
if (edad  > 18 && edad < 30) {
    console.log( "hey!! si puedes tomar café");
    
}
else if (edad < 18 ) {
    console.log("toma con precaución");

    
}

else { console.log("oops");
}

 */


/* 
 var edad = 8

 if (edad > 10) {
     console.log("puedes tomar cafe");
     
 }
else {
    console.log("no puedes tomar café");
    
}
 */


/* CONDICIONAL SWITCH */

/* var name = "kify"

switch (name) {
    case "kify":
    console.log("hey que onda" + name);
    break;

    case "Marco":
    console.log("kiubo banda" + name);
    break;

    case "Paola":
    console.log( name + "hey dude");
    break;

    default: console.log("salu2 cordiales");
    
}

 */
// break indica el final del caso

/* var estado = "Morelos";
var municipios = [];

switch(estado) {
    
    case "DF":
    console.log("Atzcapotzalco", "Benito Juarez", "Miguel Hidaldo", "Alvaro Obregón", "Coyoacán");
    break;

    case "Morelos":
    console.log("Tequesquitengo", "Cocoyoc", "Atotonilco", "Xochitepec",);
    break;
} 

console.log(municipios);
 */


 /*  CICLOS - LOOPS*/
// se declara variable interna

/* for ( var i = 0; i > 10; i++){
    console.log(i);
    
}
 */

/* var arreglo = ["Claudia", "Paola" , "Marco", "Margarita", "Moni", "Josue", "Angélica"]
console.log(arreglo.length);
 */

/* for (var i = 0; i < arreglo.length; i++ ) {
    console.log("salu2" + arreglo[i]);
    
} */



/* for ( var i = arreglo.length - 1; i >= 0; i--) {
    console.log("salu2" + arreglo[i]);
    
}
 */


/*  function comparar(x){
     console.log("puede tomar"), x > 18 && x < 35;
     
 }

 var arreglo = [20, 25, 30, 16, 29, 45, 67]
 for (var i = 0; i < arreglo.length; i++) {
     console.log();
     
 }
 */

 /* WHILE */
/* 
var i = 0

while (i < 10) {
    console.log(i);

    
} */

/* Como se comportan los Datos y los Grupos de Datos*/

/* var x = "Karla";
var y = 868;
var z = true;

var arreglo = ["Marco","Pao","Karla"];
var obj = {}; */

/* var w = y;
w = 10;

console.log(w);
console.log(y); */

/* 77777777777777777777777777777 */

/* var w = arreglo;
w[1] = "Pan" 

console.log(arreglo);
console.log(w);

 *//* 77777777777777777777777 */

/* var w = arreglo;
w = "Pan"
arreglo = "Leche"

console.log(arreglo);
console.log(w);
 */

 /* 7777777777777777777777777777777 */


 /* SCOPE : las variables no pueden salir más allá de donde están definidas */
/* var x = 0;

 for (var i = 0; i < 10; i++) {
     x = x + 2
 } */

 /* 77777777777777777777 */
/* var x = 0;
console.log(x);

var y = 1;
var z = 1;

 for (var i = 0; i < 30; i++) {
     console.log(z);
    z = x + y;
    x = y;
    y = z;
            
 } */

 /* 7777777777777777777777777 */

/*  Invertir una Cadena */

/* function esPalindromo(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        var n = i + 1;

        // console.log(cadena[index]) != cadena [cadena.length - n];

        if (cadena [i]) != cadena[cadena.length - n] {
            return false;
        }
        
    }

    return true;
}

console.log("Es Palindromo?" + esPalindromo (repar));
 */

 /* 777777777777777777777777777777
 
 */

 /* Ejercicios de Funciones "Problemas" */
/* 
 function siglo(year) {
    var x = parseInt(year)
    var y = parseFloat(year)
    console.log(x, y);
    
 }

siglo("1990") */
   


/* function siglo(year) {
    var x = parseInt(year);
    var y = x / 100;
    console.log(Math.floor(y) + 1 );
    
}

siglo("1990")
 */


// x = 0

// for (vai i =vai i <  i++) {
//     const element = arvai i];
    
// } 

/* function productoAdyacente(arreglo) {
    var x;
    var x = arreglo[0]*arreglo[1];

    for (var i = 0; i < i + arreglo.lenght - 1; i++) {
        var y = arreglo[1]*arreglo[i+1];
    if (y > x ){
        x = y
    }
        
 }
 return x; 
}


var ggg = [-23, 4, -3, 8, -12]
console.log(productoAdyacente(ggg)); */


/* 777777777777777777777777777777777 */

function sortArray(arreglo) {
    for(var i= 0; i < arreglo.lenght; i++)
{
    var cuenta = 0;
        for (var j = 0; j < arreglo.lenght; j++) {
            if (arreglo[i] > arreglo[j]){
                cuenta++;
            }
        
        }

        console.log("cuenta" + cuenta);
        console.log(arreglo[cuenta] = arreglo[1]);
        
 
    
    }
}

sortArray([8, -20, 10])

























