import fs from 'fs/promises'

export const postBooks = async (req, res) => {
    const response = await fs.readFile('./books.json', 'utf-8')
    const books = await JSON.parse(response)
    books.push(req.body)
    await fs.writeFile('./books.json', JSON.stringify(books))
    res.send(`Se ha agregado el libro ${req.body.title}`)
}