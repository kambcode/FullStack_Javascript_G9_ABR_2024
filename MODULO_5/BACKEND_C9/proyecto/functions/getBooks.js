import fs from 'fs/promises'

export const getBooks = async (req, res) => {
    const response = await fs.readFile('./books.json', 'utf-8')
    const books = await JSON.parse(response)
    res.send(books)
}

export const getBooksById = async (req, res) => {
    try {
        const response = await fs.readFile('./books.json', 'utf-8')
    const books = await JSON.parse(response)
    const id = req.params.id
    const result = books.find((book) => book.id === parseInt(id))
    if(result) res.send(result)
    else {
        res.status(404)
        res.send('Book not found')
    }
    } catch (error) {
        res.status(500)
        res.send('ocurrio un error')
    }
    
}

export const getBooksByTitle = async (req, res) => {
    try {
        const response = await fs.readFile('./books.json', 'utf-8')
        const books = await JSON.parse(response)
        const title = req.params.title
        // const result = books.filter((book) => book.title.startsWith(title))
        const result = books.filter((book) => book.title.includes(title))
        if(result) res.send(result)
        else {
            res.status(404)
            res.send('Book not found')
        }
    }catch (error) {
        res.status(500)
        console.log(error)
        res.send('error')
    }
}