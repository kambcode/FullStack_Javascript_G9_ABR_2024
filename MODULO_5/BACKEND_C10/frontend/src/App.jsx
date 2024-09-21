import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown' // Importa react-markdown
import './App.css' // Aquí puedes incluir tus estilos

function App() {
  const [iaResponse, setIaResponse ] = useState()
  const [question, setQuestion] = useState()
  const [sendingRequest, SetSendingRequest] = useState(false)

  useEffect(() => {
    if(!sendingRequest) return
    axios.post('http://localhost:3000/profe-node', {
            "pregunta" : question
    }).then((res) => {
      setIaResponse(res.data)
      SetSendingRequest(false)
    } )

    // const getDataFunction = async () => {

    //   const res = await axios.post('http://localhost:3000/profe-node', {
    //       "pregunta" : "Middleware en Express"
    //    })
    //    console.log(res)

    // }
    // getDataFunction()
  }, [sendingRequest])
  console.log(sendingRequest)
  // Funcion para almacenar en el estado la pregunta del usuario
  const changeCuestion = (e) => {
    // almacenar en el estado
    setQuestion(e.target.value)

  }

  const handleSubmit = (e) => {
    // El preventDefault evita el comportamiento predeterminado del navegador, es decir evita que la pagina se recargue y nos permite continuar con nuestro codigo
    e.preventDefault()
    console.log('hola')
    console.log(question)
    // Enviar peticion 
    SetSendingRequest(true)
  }
  return  (
    <>
      <div>
        {/* El onSubmit se activa cuando el usuario envia el formulario, dando click en el boton */}
        <form onSubmit={handleSubmit}>
          {/* en el evento on change pasamos la funcion que va a oir y almacenar los valores digitados por el usuario */}
          <input onChange={changeCuestion} type="text" />
          <button>Preguntar</button>
        </form>
      </div>
      <div>
        <h2>Tu respuesta es:</h2>
        <ReactMarkdown className="markdown-content">
          {iaResponse}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default App
