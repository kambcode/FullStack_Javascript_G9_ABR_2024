import axios from "axios"

const results = await axios.get("https://swapi.dev/api/people/1");
console.log(results.data.edited)
