import express from 'express';
import { getBooks, getBooksById, getBooksByTitle, postBooks, deleteBooks, putBooks } from './functions/index.js'
import { logMiddleware } from './middlewares/index.js';


// get, put, post, delete

const app = express()
const port = 3000

// Middleware
app.use(express.json()) // es para transformar a Json el objeto Body que viene de un endpoint PUT, POST o PATCH

app.use(logMiddleware)

app.route('/books')
    .get(getBooks)
    .post(postBooks);

app.route('/books/:id')
    .get(getBooksById)
    .delete(deleteBooks)
    .put(putBooks);

app.get('/books/title/:title', getBooksByTitle);

// app.get('/books', getBooks)
// get y delete son para obtener datos del servidor --> params
// app.get('/books/:id', getBooksById)
// app.get('/books/title/:title', getBooksByTitle)
// app.delete('/books/:id', deleteBooks)
// post y put son para enviar datos al servidor --> body
// app.post('/books', postBooks)
// put es para actualizar un recurso, usa params para identificar el recurso y body para enviar los datos a actualizar
// app.put('/books/:id', putBooks)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})