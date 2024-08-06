## React Router

### Introducción a las Rutas en React

En una aplicación de una sola página (SPA), es común tener diferentes vistas o páginas que los usuarios pueden visitar. React Router es una librería popular que nos permite gestionar la navegación en nuestras aplicaciones React, proporcionando un enfoque declarativo y basado en componentes para definir las rutas y las acciones de navegación.

### Instalación y Configuración de React Router

Para comenzar a utilizar React Router, primero debemos instalar la librería en nuestro proyecto. Podemos hacerlo utilizando npm o yarn:

```
npm install react-router-dom
```
o
```
yarn add react-router-dom
```

Una vez instalado, podemos configurar las rutas en nuestra aplicación importando los componentes proporcionados por React Router, como BrowserRouter, Route, Switch, etc.

## Creación de Rutas y Navegación entre Páginas
### BrowserRouter: 
React Router proporciona el componente BrowserRouter, que envuelve toda nuestra aplicación y nos permite usar rutas en ella. Este componente crea un contenedor de historial de navegación HTML5 que maneja la interacción del usuario con la aplicación.

### Route: 
Utilizamos el componente Route para definir las rutas de nuestra aplicación. Cada ruta se asocia a un componente específico que se renderizará cuando la URL coincida con la ruta definida.

### Switch: 
NO USAR METODO ANTIGUO :El componente Switch se utiliza para agrupar varias rutas y asegurarse de que solo se renderice la primera ruta coincidente. Esto es útil cuando tenemos rutas con coincidencias parciales y queremos que solo se muestre una página específica.

### Routes: 
El componente Routes reemplaza al componente switch y se utiliza para agrupar varias rutas y asegurarse de que solo se renderice la primera ruta coincidente. Esto es útil cuando tenemos rutas con coincidencias parciales y queremos que solo se muestre una página específica.

### Link y NavLink: 
Para la navegación entre páginas, utilizamos los componentes Link y NavLink. Estos componentes nos permiten crear enlaces que redirigen a diferentes rutas dentro de nuestra aplicación.

### Ejemplo de Implementación Antiguo con Routes:
```
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <div>Inicio</div>;
const About = () => <div>Acerca de</div>;
const Contact = () => <div>Contacto</div>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Ejemplo de Implementación Nuevo con Switch:
 ```
  import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactanos from "./components/contactanos";
import Home from "./components/inicio";
import Nosotros from "./components/nosotros";
import Servicios from "./components/servicios";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/servicios">Nuestros servicios?</Link>
            </li>
            <li>
              <Link to="/contactenos">Contactanos</Link>
            </li>
            <li>
              <Link to="/nosotros">Quienes somos?</Link>
            </li>
            <li>
              <Link to="/">inicio</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactenos" element={<Contactanos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
    </Router>
  );
};

export default App;


 ```


En este ejemplo, creamos un componente de navegación con tres enlaces que redirigen a diferentes rutas dentro de nuestra aplicación. Utilizamos BrowserRouter para envolver nuestra aplicación y definimos las rutas con Route. Con Link, creamos enlaces que permiten al usuario navegar entre las páginas.

Esta es una introducción básica a React Router, pero hay muchas más características y conceptos que se pueden explorar para crear aplicaciones de navegación más complejas y dinámicas.

Nota: recordar que Router se importa como  BrowserRouter as Router y es importante que agrupe toda la aplicacion,de lo contrario no va a funcionar el componente link