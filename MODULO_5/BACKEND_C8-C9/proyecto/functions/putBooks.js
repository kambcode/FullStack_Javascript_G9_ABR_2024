import fs from 'fs/promises'

export const putBooks = async (req, res) => {
    const response = await fs.readFile('./books.json', 'utf-8')
    const books = await JSON.parse(response)
    const id = req.params.id
    const index = books.findIndex((book) => book.id === parseInt(id))
    books[index] = req.body
    await fs.writeFile('./books.json', JSON.stringify(books))
    res.send('Se ha actualizado el libro')
}