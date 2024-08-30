import axios from "axios"

const respuesta = axios.get('https://api.escuelajs.co/api/v1/products')

//  console.log(respuesta)
// const funciona = (data) => console.log(data.data)
// respuesta.then(funciona).catch((error) => console.log(error))

const segundaRespuesta = await axios.get('https://api.escuelajs.co/api/v1/products')

  console.log(segundaRespuesta)

  