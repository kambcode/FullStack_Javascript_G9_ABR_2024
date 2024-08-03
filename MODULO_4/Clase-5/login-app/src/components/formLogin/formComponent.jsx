import {useState} from 'react'
import "./formComponent.css"


const FormComponent = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    console.log(name, 'name');
    const handleSubmit = (e) =>{
      e.preventDefault();

      if(name === "" || password === "" ){
        setError(true)
      }else{
        setError(false)
        props.setUser([name])
      }
      
    }

    const handleChange = (e) =>{
      setName(e.target.value)
      console.log(e.target.value,'setname');
    }

  return (
    <section>
        <h1>LOGIN</h1>
        <form action="" onSubmit={handleSubmit} className='form'>
            <input type="text" onChange={handleChange} value={name} />
            {error && <p className='error-message'>El campo nombre es requerido</p>}
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            {error && <p className='error-message'>El campo contrasena es requerido</p>}
            <button>Iniciar Sesion</button>
        </form>
    </section>
  )
}

export default FormComponent