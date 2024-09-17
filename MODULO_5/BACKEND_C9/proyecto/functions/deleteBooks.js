import fs from 'fs/promises'

export const deleteBooks =  async (req, res) => {
    const response = await fs.readFile('./books.json', 'utf-8')
    const books = await JSON.parse(response)
    const id = req.params.id
    const result = books.findIndex((book) => book.id === parseInt(id))
    if(result !== -1){
        books.splice(result, 1)
        await fs.writeFile('./books.json', JSON.stringify(books))
        res.send(`Se ha eliminado el libro con el id ${id}`)
    }
    else {
        res.status(404)
        res.send('Book not found')
    }
}