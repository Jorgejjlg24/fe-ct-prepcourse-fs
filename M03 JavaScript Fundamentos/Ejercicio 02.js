/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código: 
   return string;
   }

   devolverString("hola");
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   resultado=x+y;
   return resultado;
}
suma (4,8);
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   resultado=x-y;
   return resultado;
}
resta(10,7);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   resultado=x/y;
   return resultado;
}
divide (10,2)
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   resultado=x*y;
   return resultado;
}
multiplica(2,8);
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resultado=x % y;
   return resultado;
}
obtenerResto(10,3);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
