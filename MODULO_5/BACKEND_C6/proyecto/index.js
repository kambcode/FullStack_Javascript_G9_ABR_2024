import http from 'http';
import 'dotenv/config'

// get, post, put, delete
// CRUD -> Create = post, Read = get, Update = put, Delete = delete

// req = request -> peticion
// res = response -> respuesta

const port = process.env.PORT // la url es localhost:3000

const libros = JSON.stringify([
    {titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', anio: 1954},
    {titulo: 'Harry Potter', autor: 'J.K. Rowling', anio: 1997},
])

const autores = JSON.stringify([
    {nombre: 'J.R.R. Tolkien', anioNacimiento: 1892},
    {nombre: 'J.K. Rowling', anioNacimiento: 1965},
])

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    switch(req.url){
        case '/libros':
            res.write(libros)
            res.end()
        case '/autores':
            res.write(autores)
            res.end()
        default:
            // res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write('Error 404: Not found')
    }
    res.end()
}).listen(port)