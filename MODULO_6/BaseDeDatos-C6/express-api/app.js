
const express = require('express');
const router = require('./routes/movieRoutes');


const port = process.env.PORT || 3000;


const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use(router);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})

