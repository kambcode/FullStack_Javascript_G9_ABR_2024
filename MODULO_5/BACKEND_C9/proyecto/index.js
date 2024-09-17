import express from 'express';
import { getBooks, getBooksById, getBooksByTitle } from './functions/getBooks.js';
import { postBooks } from './functions/postBooks.js';
import { deleteBooks } from './functions/deleteBooks.js';
import { putBooks } from './functions/putBooks.js';
import { auth, bodyValidation, logMiddleware } from './middlewares/index.js';


// get, put, post, delete

const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(logMiddleware)
app.get('/books', getBooks)
// get y delete son para obtener datos del servidor --> params
app.get('/books/:id', getBooksById)
app.get('/books/title/:title', getBooksByTitle)
app.delete('/books/:id', auth,  deleteBooks)
// post y put son para enviar datos al servidor --> body
app.post('/books', auth, bodyValidation, postBooks)
// put es para actualizar un recurso, usa params para identificar el recurso y body para enviar los datos a actualizar
app.put('/books/:id', auth, bodyValidation, putBooks)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})