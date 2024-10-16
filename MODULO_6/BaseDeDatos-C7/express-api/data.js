const movies = [
    {
      id: 1,
      title: "Inception",
      directorId: 1,
      genre: "Sci-Fi",
      releaseYear: 2010
    },
    {
      id: 2,
      title: "Interstellar",
      directorId: 1,
      genre: "Sci-Fi",
      releaseYear: 2014
    }
  ];
  
const directors = [
    {
      id: 1,
      name: "Christopher Nolan",
      nationality: "British-American"
    },
    {
      id: 2,
      name: "Quentin Tarantino",
      nationality: "American"
    }
  ];

module.exports = {
    movies,
    directors,
}