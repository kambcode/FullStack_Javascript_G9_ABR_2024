import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './assets/pages/aboutPage/aboutPage'
import HomePage from './assets/pages/homePage/homePage'
import UsersPage from './assets/pages/usersPage/usersPage'
import NoFountPage from './assets/pages/notFound/noFountPage'
import NavbarComponent from './assets/components/navbar/navbarComponent'
import UserParam from './assets/pages/userParam/userParam'


function App() {



  return (
        <BrowserRouter>

        <NavbarComponent />
          <Routes>
            <Route path='/'  element={<HomePage />}></Route>
            <Route path='/about'  element={<AboutPage />}></Route>
            <Route path='/user'  element={<UsersPage />}></Route>
            <Route path='/users/:id'  element={<UserParam />}></Route>
            <Route path='/*'  element={<NoFountPage />}></Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
