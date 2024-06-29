# Tarea 5: Estructuras de control, operadores logicos y comparativos y lógica proposicional

## Objetivo:

Practicar el uso de estructuras de control (if, else, else if), de operadores logicos (&&, || y !) y de operadores comparativos (==, ===, !=, !==, <, >, <=, >=), asi como logica proposicional (true && false (false || true)).

## 1. Calculadora

Hacer un programa que le permita al usuario hacer un cálculo dependiendo de dos valores y de la operación que ingrese (suma, resta, multiplicación, división). Si el usuario ingresa los valores 7 y 8 y después ingresa una suma se deben sumar los dos números que ingresó y asi con todas las operaciones aritméticas.

## 2. Sistema de Gestión de Registro de Estudiantes

Imagina que estás desarrollando un sistema de gestión de registro de estudiantes para una universidad. Este sistema debe tomar en cuenta varios criterios para determinar el estado de un estudiante y sus privilegios. Debes escribir un script en JavaScript que verifique varios datos sobre un estudiante y devuelva un mensaje que indique su estado. Estos datos son:

- nombre (string): El nombre del estudiante.
- edad (number): La edad del estudiante.
- promedio (number): El promedio de calificaciones del estudiante (0 a 10).
- esRegular (boolean): Si el estudiante está registrado como regular.
- cantidadMateriasAprobadas (number): La cantidad de materias aprobadas por el estudiante.
- esBecado (boolean): Si el estudiante tiene una beca.

Requisitos:

- Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que el estudiante es menor de edad y no puede registrarse.
- Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje indicando que el estudiante no cumple con el promedio mínimo requerido.
- Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está registrado como regular, debe mostrarse un mensaje indicando que el estudiante debe registrarse como regular.
- Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular pero no tiene una beca, debe mostrarse un mensaje indicando que puede solicitar una beca.
- Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular y tiene una beca, debe mostrarse un mensaje indicando que el estudiante cumple con todos los requisitos.

```javascript
// Puedes recibir datos con un promt o dejarlos quemados en codigo
const nombre = "Sergio";
const edad = 10;
...
 
//TODO: Usar if else para hacer la validaciones y mostrar el mensaje de error
```


* Nota: En los ejercicios 1 y 2 pueden hacer uso de la funcion prompt de js para capturar información que ingresa el usuario (por lo que tendrían que crear un archivo html e indexar el js allí) o también podrian simular los valores de toda la data necesaria para desarrollar los programas. Punto extra para los que lo hagan usando una función.

## 3. Lógica proposicional

Resolver los siguientes ejercicios:

- true || true || false && true || false && true && true || false
- true && (false || false && (true && (true || false && true))) || false && (true || false)
- !(!true && (false || false && !!!true || (true && !false))) || false && true

* Nota: Cada ejercicio se debe resolver paso a paso y dejarlo por escrito hasta dar con el resultado final, tal cual lo vimos en clase.