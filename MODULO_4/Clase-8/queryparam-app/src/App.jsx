
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
