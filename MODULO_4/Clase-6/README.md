## Ejercicio Práctico: Login

### Controlando Inputs y Validando Campos en un Formulario de Inicio de Sesión

El ejercicio práctico de login implica la creación de un formulario de inicio de sesión en una aplicación de React. En este ejercicio, aprenderemos cómo controlar los inputs del formulario y validar los campos antes de enviar la información al servidor.

### Teoría:

#### 1. Manejo de Estado con useState:

En React, el manejo de estado es fundamental para mantener y actualizar la información en los componentes. Utilizamos el hook `useState` para crear estados locales que almacenan la información ingresada por el usuario, como el nombre de usuario y la contraseña. Cada vez que el usuario modifica un input, actualizamos el estado correspondiente utilizando la función `setEstado`.

#### 2. Control de Inputs y Vinculación de Valores:

En un formulario de inicio de sesión, queremos controlar los inputs para asegurarnos de que reflejen el estado actual de la aplicación. Para lograr esto, vinculamos los valores de los inputs a los estados correspondientes utilizando el atributo `value`. Esto nos permite controlar los inputs y mantener el estado actualizado a medida que el usuario escribe.

#### 3. Validación de Campos:

Es importante validar los campos del formulario antes de enviar la información al servidor. En este ejercicio, implementamos lógica de validación para asegurarnos de que los campos del formulario no estén vacíos. Si algún campo está vacío, mostramos un mensaje de error para informar al usuario sobre el problema.

#### 4. Envío del Formulario:

Utilizamos el evento `onSubmit` del formulario para manejar el envío de los datos al servidor. Antes de enviar los datos, realizamos una última verificación para asegurarnos de que los campos estén validados correctamente. Si todo está en orden, procedemos a enviar los datos al servidor para el inicio de sesión.

#### 5. Manejo de Errores:

Implementamos manejo de errores para manejar posibles problemas durante el proceso de inicio de sesión. Esto incluye errores como credenciales incorrectas o errores del servidor. Mostramos mensajes de error apropiados para informar al usuario sobre cualquier problema y ayudarlo a comprender cómo resolverlo.

### Ejemplo de Implementación:

```
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validación de campos
    if (!username || !password) {
      setError('Por favor ingrese nombre de usuario y contraseña.');
      return;
    }
    // Envío de datos al servidor
    // Aquí iría la lógica para enviar los datos de inicio de sesión al servidor
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
```