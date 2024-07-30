## Componentes en React

### Creación de componentes

Los componentes son la piedra angular de cualquier aplicación de React. Pueden ser considerados como piezas reutilizables de la interfaz de usuario que encapsulan cierto comportamiento y apariencia. En React, hay dos tipos principales de componentes: componentes de clase y componentes funcionales.

#### Componentes de clase

Los componentes de clase son clases de JavaScript que extienden la clase `React.Component`. Tienen un método `render()` que devuelve la estructura de la interfaz de usuario del componente. Aquí tienes un ejemplo de cómo se vería un componente de clase en React:

```
import React, { Component } from 'react';

class MiComponente extends Component {
  render() {
    return <h1>Hola Mundo</h1>;
  }
}

export default MiComponente;
```

#### Componentes funcionales
Los componentes funcionales son funciones de JavaScript que devuelven elementos React. Son más simples que los componentes de clase y son preferidos cuando no necesitas utilizar estados o métodos de ciclo de vida. Aquí tienes un ejemplo de un componente funcional en React:

```
import React from 'react';

const MiComponente = () => {
  return <h1>Hola Mundo</h1>;
};

export default MiComponente;
```
### Estados y Props
#### Estados
Los estados en React son objetos que contienen datos relevantes para un componente. Pueden ser modificados a lo largo del tiempo en respuesta a diferentes eventos. Los estados se definen en el constructor de un componente de clase utilizando this.state y se actualizan utilizando el método this.setState(). Aquí tienes un ejemplo de cómo se usaría un estado en un componente de clase:

```
import React, { Component } from 'react';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: 'Hola Mundo'
    };
  }

  render() {
    return <h1>{this.state.mensaje}</h1>;
  }
}

export default MiComponente;
```

####  Props

Las props (propiedades) en React son argumentos que se pasan de un componente a otro. Son inmutables y se utilizan para pasar datos de un componente principal a un componente secundario. Las props se pasan como atributos en los elementos JSX. Aquí tienes un ejemplo de cómo se usarían las props en un componente funcional:

```
import React from 'react';

const MiComponente = (props) => {
  return <h1>{props.mensaje}</h1>;
};

export default MiComponente;
```

### Ciclo de vida de un componente (Class Components)
Los componentes de clase en React tienen un ciclo de vida que consta de varios métodos que se ejecutan en diferentes etapas del ciclo de vida del componente. Algunos de los métodos de ciclo de vida más comunes son:

- componentDidMount(): Se llama justo después de que el componente se monta en el DOM. Es un buen lugar para cargar datos desde una API o inicializar cualquier suscripción.
- componentDidUpdate(): Se llama inmediatamente después de que se actualice el componente. Es útil para realizar operaciones de actualización después de que los cambios en el estado o las props hayan sido aplicados.
- componentWillUnmount(): Se llama justo antes de que el componente se desmonte del DOM. Es un buen lugar para limpiar cualquier suscripción o liberar recursos.
Estos son solo algunos de los métodos de ciclo de vida disponibles en los componentes de clase de React.

```
import React, { Component } from 'react';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  componentDidMount() {
    console.log('El componente se montó en el DOM');
  }

  componentDidUpdate() {
    console.log('El componente se actualizó');
  }

  componentWillUnmount() {
    console.log('El componente se va a desmontar del DOM');
  }

  render() {
    return <h1>Contador: {this.state.contador}</h1>;
  }
}

export default MiComponente;
```

Este es un resumen de los conceptos básicos sobre componentes en React.
