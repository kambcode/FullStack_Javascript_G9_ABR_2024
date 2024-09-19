import express from "express";
import axios from "axios";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;

const openaiURL = "https://api.openai.com/v1/chat/completions";

app.use(express.json());


const objeto = {
    nombre: 'daniel',
    apellido: 'lopez',
    edad: '29'
}
const array = [
    "daniel", "juan", "maria"
] 

app.get('/test', (req, res) => {
    const {nombre, apellido, edad} = objeto
    const [primero, cualquiercosa, tercero] = array
    console.log(cualquiercosa)
    // const nombre = objeto.nombre
    // const apellido = objeto.apellido

    res.send("soy: " + nombre + " " + apellido + " mi edad es: " + edad)
})

app.post("/profe-node", async (req, res) => {
  const { pregunta } = req.body;
  console.log(pregunta);
  try {
    const response = await axios.post(
      openaiURL,
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content:
              `Quiero que seas un profesor de node js y me expliques ${pregunta}`,
          },
        ],
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.send(response.data.choices[0].message.content);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`el proyecto se ha inicializado en el puerto ${port}`);
});
