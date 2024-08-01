import React, {useState} from 'react'
import './App.css'
import FormComponent from './components/formLogin/formComponent'
import HomeComponent from './components/home/homeComponent'

function App() {
  
  const [user, setUser] = useState([]);

  return (
    <div>
      {
        !user.length > 0 
        ? <FormComponent setUser={setUser}/>
        : <HomeComponent user={user} setUser={setUser}/>
      }
    </div>
  )
}

export default App
