## ¿Qué es git?

- Antes de definir poner un ejemplo de una estadista de deportes, que lleva un control de todo lo que ha pasado en x evento deportivo como el futbol por ejemplo desde muchos años atrás. Esa persona sabe cuantas veces se han enfrentado dos oponentes, quien ha metido mas goles en ese partido en la historia, en que estadio se ha jugado mas el partido como tal, si se ha jugado en una final, etc. En definitiva sabe, a través de un control en las estadísticas, que cosa paso y cuando paso. Seguramente si le preguntamos que paso el 12 de enero de 1994, pues el no sabra pero si va y mira en su registro se dará cuenta que se jugo x partido entre dos equipos rivales de la ciudad y que lo gano el visitante con un gol de fulano de tal al minuto 60.
- Ese control / historial se puede llevar al mundo del código también, el código no es algo que se escriba en un día y ya todo sale a producción, no, un código puede tener muchas versiones, por ejemplo no se si han escuchado de x software que tiene la version alfa, beta, que un software esta en beta es porque aun no esta terminado, o ya yendo a números seria la version 1.0 o 2.1.1, etc. Eso quiere decir que el software tiene una vida y como no somos perfectos pues seguramente en ese historial se han cometido errores y es por eso que se suelen sacar nuevas versiones con parches que corrigen esos errores.
- Otra cosa importante es mencionar que este tipo de proyectos como un proyecto de estadísticas deportiva o por ejemplo un blog de viajeros en moto puede ser manejado o manipulado por mas de una persona, por ejemplo el motero 1 posteado un viaje que hizo hoy con su fecha, momentos mas importantes, fotos, etc y mañana puede que otro motero haga lo mismo con la jornada de recorrido que va a tener. Entonces vemos que podemos añadir trabajo en grupo en proyectos así. Tal vez en las estadísticas trabajen mas de una persona y una persona se encargue de obtener estadísticas y resultados de una liga en concreto y otro se encargue de otra liga diferente, por lo que al final podemos ver que x persona agrego las estadísticas de la liga de Francia y otra persona agrego las estadísticas de la liga de Inglaterra. Igual para el blog de motos, se puede ver que el día lunes 4 de mayo de 2012 tal persona agrego al blog la descripción de un viaje y otra persona agrego la descripción de otro viaje en otra ciudad diferente.
- A esto le podríamos llamar sistema de control de versiones que como su nombre lo indica lleva el control de un historial sobre algo y permite saber quien ha hecho un cambio o agregado una nueva funcionalidad en un determinado momento del tiempo.
- Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear los cambios en sus proyectos de software. Con Git, los cambios en los archivos se registran en un historial, lo que facilita la colaboración entre equipos y la gestión de proyectos.

## ¿Quien creó git? y ¿cuándo?

Linux torballs fue el creador del kernel de linux, algo sobre lo que trabajan todos los sistemas operativos que conocemos, linux en si, iOS y windows. En el año 2005 este sr estaba trabajando en este proyecto y para controlar las versiones de su proyecto, el cual era open source es decir mucha gente colaboraba con el, pues utilizaba un sistema de control de versiones que se llamaba bit keeper que lastimosamente o afortunadamente se volvió de pago y el no tenia entre sus planes pagar por esa licencia. Entonces a partir de ahi decidió crear su propio sistema de versiones al cual llamo git. Es decir prácticamente se puede decir que git salir de la necesidad de una persona de organizar un poco mejor su trabajo teniendo en cuenta que el software que usaba para ello empezó a cobrar.

## ¿Por que es tán usado?

- **Distribuido**: Cada colaborador dentro de un proyecto tiene una copia idéntica del repositorio, que esta en algún lugar de internet, en su equipo local, lo que significa que no necesitan conectarse a un servidor ni tampoco tener conexión internet permanente, por lo que pueden trabajar en cualquier momento (al menos en su pc, para subir los cambios al servidor remoto si necesitan conexión a internet)
- **Ramas**: Son nuevos caminos o bifurcaciones que puede tomar el proyecto para no comprometer a la rama principal, es decir que la base de todo el proyecto sea integra. Esto quiere decir que para cualquier trabajo en especifico de algún desarrollador, como por ejemplo corregir un error, añadir nuevas funcionalidades o hacer pruebas de algo, se puede sacar una rama o copia de la rama principal y trabajar en ella. (Mostrar como es el flujo de trabajo entre ramas en alguna imagen de google).


## Conceptos clave de Git:
* **Repositorio (Repository)**: Es el lugar donde se almacenan todos los archivos y carpetas de un proyecto, junto con el historial de cambios. Es decir es un proyecto que ya esta siendo seguido por git, lo que significa que ya tiene un historial en el que se estan registrando sus cambios.
* **Commit**: Es un conjunto de cambios que se guardan en el repositorio. Cada commit tiene un mensaje que describe los cambios realizados.
* **Branch (Rama)**: Es una versión paralela del código en un repositorio. Las ramas permiten a los desarrolladores trabajar en nuevas características o correcciones de errores sin afectar el código principal.
* **Clon**: Es una copia exacta del repositorio. Cuando un programador se integra a un equipo de trabajo lo primero que debe hacer es clonar el repositorio remoto en su equipo local.
* **Merge (Fusionar)**: Es el proceso de combinar los cambios de una rama a otra. Se utiliza para integrar las modificaciones realizadas en una rama de desarrollo de vuelta a la rama principal.

## Herramientas

- Linea de comandos o terminal.
- Gitkraken
- Sourcetree
- Github desktop

## Repositorios en la nube

- Github
- Bitbucket
- Gitlab

## ¿Qué es GitHub?

GitHub es una plataforma en línea que utiliza Git para alojar repositorios de código. Permite a los desarrolladores colaborar en proyectos, realizar seguimiento de problemas, realizar solicitudes de extracción y muchas otras funciones relacionadas con el desarrollo de software.

## IDEs y editores en los que se puede integrar git

- VsCode
- Intellij Idea
- Atom