# Tareas del módulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento. 

## Tarea


1. Crearemos un objeto llamado Serie cuyos atributos son:  
    - **titulo**  string
    - **numero de temporadas** number
    - **genero** string
    - **creador** string
    - **año de lanzamiento** number

2. Crearemos un objeto llamado Persona cuyos atributos son:  
    - **nombre**  string
    - **edad** number
    - **peso** string
    - **altura** string
    - **calcularImc** función que retorne el IMC recuerda que IMC = peso / (altura*altura)
    - **esMayorDeEdad** función que retorna true / false dependiendo de si la edad de la persona es mayor a 18 años o no

3. Crear un objeto llamado libro, y que tiene las siguientes propiedades
    - **Nombre** string
    - **Fecha de publicacion** string
    - **Price** number
    - **Autores** array string (minimo 3 autores)
    - **Numero de paginas** number
    - **Categoria** string "only_adults"
    - **isAvailableForUser( userAge )** funcion que recibe como argumento la edad de la persona que quiere comprar el libro, y debe retornar true o false dependiendo de si el usuario es mayor de edad y si la categoría es "only_adults"; si la categoria no es "only_adults" entonces cualquier persona puede leer el libro.

4. Usando el objeto de el punto numero 3, agregar una propiedad llamada `getTotalPrice`, que debe ser una función y retornar el precio de el libro + IVA (19%)


