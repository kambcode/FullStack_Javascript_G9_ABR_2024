# Tarea: Modelos ER con Relaciones Muchos a Muchos e Instalación de PostgreSQL

## Objetivo
El objetivo de esta tarea es que los estudiantes se familiaricen con la instalación y uso de PostgreSQL y PGAdmin, y practiquen la creación de modelos entidad-relación (ER) que incluyan relaciones muchos a muchos.

## Descripción de la Tarea
La tarea se divide en tres puntos. El primer punto requiere la instalación de un cliente/servidor de PostgreSQL y PGAdmin. El segundo punto se enfoca en la creación de un modelo ER básico con relaciones muchos a muchos. El tercer punto implica la creación de un modelo ER un poco más complejo, también con relaciones muchos a muchos.

## Puntos de la Tarea

1. **Punto 1: Modelo ER Básico - Courses and Students**
   - **Descripción**: Crear un modelo entidad-relación para gestionar información sobre cursos y estudiantes con una relación muchos a muchos.
   - **Entidades**:
     - **Course**: `Course_ID`, `Title`, `Description`
     - **Student**: `Student_ID`, `Name`, `Email`
     - **Course_Student**: `Course_ID`, `Student_ID` (entidad de relación)
   - **Relaciones**:
     - Un estudiante puede estar inscrito en uno o más cursos.
     - Un curso puede tener uno o más estudiantes.

2. **Punto 2: Modelo ER Complejo - Projects and Employees**
   - **Descripción**: Crear un modelo entidad-relación para gestionar información sobre proyectos y empleados con una relación muchos a muchos.
   - **Entidades**:
     - **Project**: `Project_ID`, `Name`, `Start_Date`, `End_Date`
     - **Employee**: `Employee_ID`, `Name`, `Position`, `Department`
     - **Project_Employee**: `Project_ID`, `Employee_ID` (entidad de relación / tabla pivote)
   - **Relaciones**:
     - Un empleado puede trabajar en uno o más proyectos.
     - Un proyecto puede tener uno o más empleados.

3. **Punto 3: Instalación de PostgreSQL y PGAdmin**
   - **Descripción**: Instalar PostgreSQL y PGAdmin en sus computadoras.
   - **Instrucciones**:
     1. Descargar e instalar PostgreSQL desde [postgresql.org](https://www.postgresql.org/download/).
     2. Descargar e instalar PGAdmin desde [pgadmin.org](https://www.pgadmin.org/download/).
     3. Crear una base de datos de prueba en PGAdmin llamada `test_db`.

## Instrucciones
1. **Diagramas**: Los estudiantes deben crear los diagramas ER utilizando herramientas como draw.io, Lucidchart, o incluso a mano y luego digitalizados.
2. **Documentación**: Cada diagrama debe ir acompañado de una breve descripción que explique las entidades y las relaciones.