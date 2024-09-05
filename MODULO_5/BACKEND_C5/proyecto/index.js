import 'dotenv/config'
console.log(process.env.VARIABLE);

const argumentos = process.argv.slice(2);
const [pokemon] = argumentos;

const baseUrl = process.env.BASE_API_URL;

const fetchPokemon = async () => {
  const nombrePokemon = pokemon ? pokemon :  ''
  const response = await fetch(`${baseUrl}${nombrePokemon}`);
  const data = await response.json();
  console.log(data);
}

fetchPokemon();