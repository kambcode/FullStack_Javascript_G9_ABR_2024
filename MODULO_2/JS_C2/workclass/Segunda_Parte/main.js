// Condicionales (If - Else)
// Crear un programa que le pida al usuario la edad,
// Para entrar a la pagina debe tener más de 18 años

// Comparar Variables:
// 1. Igualdad ==
// 2. Mayor >
// 3. Menor <
// 4. Mayor o Igual >=
// 5. Menor o Igual <=
// 6. Igualdad Exacta ===
// 7. Diferencia !=

// Explicación == & ===

// == -> Comparar los valores sin tener en cuenta los tipos
// === -> Compara si los valores y los tipos son iguales

// Ejemplo Igualdad e Igualdad Exacta:
// A. Igualdad ==:
// -> 2 == 2 -> True
// -> "32" == 32 -> True
// -> 3 == 5 -> False
// -> "Colombia" == "colombia" -> False


// B. Igualdad exacta ===:
// -> "32" === 32 -> False
// -> "Colombia" === "colombia" -> False

// Parentesis: ()
// LLaves: {}
// Corchetes o Cajas: []

// ---------------------------------------------
// Crear un programa que le pida al usuario la edad,
// Para entrar a la pagina debe tener más de 18 años

// Logueamos en una pagina

//var age = Number(prompt("Digita tu edad"));

// if(CONDICION){ QUE QUIERO QUE PASE SI SE CUMPLE LA CONDICIÓN }
// Si yo digito en el prompt 32 años if("18" === 18)
// if(age >= 18){
//     document.write("Puedes Ingresar a la Pagina")
// } else {
//     document.write("Eres menor de edad, no puedes ingresar")
// }

// Reto:
// 1. Vamos a pedirle a él usuario la nacionalidad, vamos a guardar en una
// variable el resultado.

// 2. Crear una condicion con un if, donde la condicion compare y diga,
// si se cumple la condicion, nos diga eres colombiano, de lo contrario
// con un else{}, nos diga eres de otro pais

var nacionalidad = prompt("Digita tu pais")
if(nacionalidad === "colombia"){
    document.write("Eres de Colombiano")
} else {
    document.write("Eres de otro pais.")
}


// Tarea
var Numero1 = prompt("Digita el numero1")
var Numero2 = prompt("Digita el numero2")

