// document.write("Hola mundo")
// const country = prompt("Escriba el pais de nacimiento");

// if(condicion){Lo que quieres hacer, si se cumple la condicion}
// else {Lo que quieres hacer, si no se cumple la condicion}

// if(country === "colombia"){
//     document.write("Eres colombiano")
// }

// if(country === "panama"){
//     document.write("Eres panameño")
// }

// if(country === "venezuela"){
//     document.write("Eres venezolano")
// }

// if(country === "peru"){
//     document.write("Eres peruano")
// }

// if(condicion){Lo que quieres hacer, si se cumple la condicion}
// else if (condicion){Lo que quieres hacer, si se cumple la condicion}
// else if (condicion){Lo que quieres hacer, si se cumple la condicion}
// else if (condicion){Lo que quieres hacer, si se cumple la condicion}
// else {Lo que quieres hacer, si no se cumple la condicion}

// const country = prompt("Escriba el pais de nacimiento");

// if(country === "colombia"){
//     document.write("Eres colombiano")
// } else if (country === "panama"){
//     document.write("Eres panameño")
// } else if (country === "venezuela"){
//     document.write("Eres venezonalo")
// } else if (country === "peru"){
//     document.write("Eres peruano")
// } else {
//     document.write("Digita otra nacionalidad")
// }


// RETO (if/else if/else)

// Crear un programa que calcule el precio de entrada a un bar

// Tiene que preguntar el genero de las personas (male / female)
// Preguntar la edad

// Los menores de 18 años (sean masculino o femenino) -> NO PUEDEN ENTRAR
// Las mujeres siempre entran gratis
// Los mayores de 18 años -> Pagan un cover de $30.000

// ---------------------------------------------------------------------------

// RETO (2)
// Crear un programa que pida a él usuario un color de camiseta y una talla (S/M/L/XL)
//El programa debe decirle a él usario cuantas camisetas hay disponibles:

// azules de talla L -> 4 camisetas
// azules de talla M -> 10 camisetas
// azules de talla S -> 6 camisetas
// amarillas de talla M -> 8 camisetas
// verde de tallas S -> 2 camisetas
// de los demás colores y tallas no hay disponibles

const color = prompt("Digita el color de la camiseta").toLowerCase(); // Minuscula
const talla = prompt("Inserte la talla de tu camiseta").toUpperCase(); // Mayuscula

if(talla === "L" && color === "azul"){
    document.write("Hay 4 camisetas de color azul")
} else if(talla === "M" && color === "azul"){
    document.write("Hay 10 camisetas de color azul")
} else if(talla === "S" && color === "azul"){
    document.write("Hay 6 camisetas de color azul")
} else if(talla === "M" && color === "amarillo"){
    document.write("Hay 8 camisetas de color amarillo")
} else if(talla === "S" && color === "verde"){
    document.write("Hay 2 camisetas de color verde")
} else {
    document.write("No hay disponibles")
}


