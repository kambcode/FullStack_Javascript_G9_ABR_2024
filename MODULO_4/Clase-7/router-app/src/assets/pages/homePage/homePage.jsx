import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  
  const userId = 10;
    return (


    <div>
        <h1>aplication</h1>

        <Link to="/user">
            Usuarios
        </Link>
        <Link to={`/user/${userId}`}>
            Usuarios
        </Link>
    </div>
  )
}

export default HomePage