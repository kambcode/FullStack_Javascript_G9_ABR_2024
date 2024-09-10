import express from 'express';

// get, put, post, delete

const app = express()
const port = 3000

// Middleware
app.use(express.json())



let books = [
    {
        id: 1,
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        gender: 'Fantasy'
    },
    {
        id: 2,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        gender: 'Fantasy',
    },
    {
        id: 3,
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        gender: 'Mystery'
    }
]

app.use((req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
})

app.get('/books', (req, res) => {
    res.send(books)
})

// get y delete son para obtener datos del servidor --> params

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const result = books.find((book) => book.id === parseInt(id))
    if(result) res.send(result)
    else {
        res.status(404)
        res.send('Book not found')
    }
})

app.get('/books/title/:title', (req, res) => {
    const title = req.params.title
    // const result = books.filter((book) => book.title.startsWith(title))
    const result = books.filter((book) => book.title.includes(title))
    if(result) res.send(result)
    else {
        res.status(404)
        res.send('Book not found')
    }
})

app.delete('/books/:id', (req, res) => {
    const id = req.params.id
    const result = books.findIndex((book) => book.id === parseInt(id))
    if(result !== -1){
        books.splice(result, 1)
        res.send(`Se ha eliminado el libro con el id ${id}`)
    }
    else {
        res.status(404)
        res.send('Book not found')
    }
})

// post y put son para enviar datos al servidor --> body

app.post('/books', (req, res) => {
    books.push(req.body)
    res.send(`Se ha agregado el libro ${req.body.title}`)
})

// put es para actualizar un recurso, usa params para identificar el recurso y body para enviar los datos a actualizar

app.put('/books/:id', (req, res) => {
    const id = req.params.id
    const index = books.findIndex((book) => book.id === parseInt(id))
    books[index] = req.body
    res.send('Se ha actualizado el libro')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})