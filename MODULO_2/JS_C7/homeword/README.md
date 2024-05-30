# Tareas del módulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento. 

## Tareas

Como tarea te proponemos crear algunos programas usando todo lo visto hasta ahora (arrays, loops, condicionales y variables):

1. Genera un arreglo (lista) que tenga los numeros del 0 al 1000

2. Crea un array `myArray` de 50 elementos (números), que contendrá 50 numeros números aleatorios entre 1 y 10. Ejemplo `[ 3, 2 , 6, 8, 1, 3, 5, 2 .....]` (50 elementos)

3. Usando el array que creaste en el punto 2, vamos a crear un nuevo arreglo llamado `newArray` que contenga solo los numeros que son menores a 4. Ejemplo si en punto 2 generaste un arreglo  `myArray` como este [7,2,5,2,9,3,1,4,8], tu nuevo arreglo `newArray` debera ser [2,2,3,1].
**Tip** Utiliza un for para recorrer el primer `myArray` arreglo e ir llenando el segundo  (`newArray.push`) pero solo si el valor es menor a 4.


4. Dado un array 5 elementos de strings eg. `const myArray = ["hola", "mundo", "como", "estas", "hoy"]`. Copia los elementos del arreglo en un nuevo arreglo pero en orden inverso, y muéstralo por la pantalla. **Tip** puedes hacer un for que inicie en myArray.length y que en cada iteracion en ves de sumar reste una posicion así podras leer tu arreglo en sentido contrario

5. Escribir un programa usando HTML, Javascript y la función promt que pregunte a el usuario una lista de compras y las vaya almacenando cada una de estos elementos en un array. Si en algun momento la tarea que el usuario ingreso ya fue ingresada anteriormente (es decir ya pertence a el array) elemento NO debe añadirse a el array y en su defecto mostrar un mensaje que diga "Error: Este elementos ya esta en la lista de compras".

El programa termina cuando la lista de compras tenga 5 elementos 
**NOTA** recuerda que para saber si un elemento ya esta en el array puedes usar la función includes eg: `myArray.includes(<ELEMENTO_QUE_QUIERES_BUSCAR_EN_EL_ARRAY>)`


