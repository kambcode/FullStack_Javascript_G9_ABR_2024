//Algoritmia

// Miremos un ejemplo basico donde literalmente planteamos un 
// algoritmo de cocina para cocinar un huevo.
// Cuando vamos a cocinar un huevo tenemos que pensar en como
//  lo queremos, si frito o hervido que son sus 
// preparaciones mas comunes, por supuesto podríamos considerar
//  mas pero para este caso solo consideraremos
// estas dos, luego, una vez preparado el huevo necesitamos 
// definir si lo queremos salado o no, si es asi 
// agregamos sal y si no simplemente lo servimos. Así de 
// sencillo dejariamos claros los pasos para cocinar 
// un delicioso huevo. El diagrama luciría algo así.



// Reto 2.
// Se nos pide realizar un diagrama de flujo basico, de un programa que lee un numero insertado mediante una entrada y
// validar si es cero, positivo o negativo, lo primero que tendriamos que hacer entonces es por supuesto preguntar el 
// número, luego leerlo y posteriormente hacer las validaciones, en este caso lo primero sería validar si es cero o no,
// para luego entonces pasar a si es cero, responder que es cero y si no luego validar si es positivo o negativo para 
// dar respuesta. El diagrama final se vería algo así.


let numero = 1
if(numero === 0){
    console.log("El numero es 0")
} else if(numero < 0){
    console.log("El numero es Negativo")
} else {
    console.log("El numero es Positivo")
}