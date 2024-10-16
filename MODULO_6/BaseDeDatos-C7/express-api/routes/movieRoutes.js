const { Router } = require("express");
const sequelize = require("../db/sequelize");

const router = Router();

router.get("/movies", async (req, res) => {
  const { limit } = req.query;

  let query = `
    SELECT * FROM movies
  `;

  limit ? (query += ` LIMIT ${limit};`) : (query += ";");

  try {
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const result = await sequelize.query(
      `
      SELECT * FROM movies
      WHERE id = :id
    `,
      {
        replacements: { id },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!result?.length > 0)
      return res.status(404).json({ message: "Movie not found" });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/movies", async (req, res) => {
  try {
    const { releaseYear, title, genre } = req.body;
    console.log(req.body);

    if (!title || !genre || !releaseYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(releaseYear)) {
      return res
        .status(404)
        .json({ message: "release year should be a numbers" });
    }

    const result = await sequelize.query(
      `
      INSERT INTO movies (title, genre, releaseYear)
      VALUES (:title, :genre, :releaseYear)
      RETURNING *;
    `,
      {
        replacements: { title, genre, releaseYear },
        type: sequelize.QueryTypes.INSERT,
      }
    );

    if (!result[0].length > 0) {
      return res.status(404).json({ message: "something went wrong" });
    }

    res.status(201).json(result[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/movies/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { releaseYear, title, genre } = req.body;

    if (!title || !genre || !releaseYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [movies, number] = await sequelize.query(
      `
        UPDATE movies
        SET title = :title,
            genre = :genre,
            releaseYear = :releaseYear
        WHERE id = :id
        RETURNING *;
        `,
      {
        replacements: { title, genre, releaseYear, id },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    if (number <= 0)
      return res.status(404).json({ message: "Movie not found" });

    res.status(200).json(movies[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/movies/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const result = await sequelize.query(
      `
      DELETE FROM movies
      WHERE id = :id
      RETURNING *;
      `,
      {
        replacements: { id },
        type: sequelize.QueryTypes.DELETE,
      }
    );

    console.log(result);

    if (result.length === 0)
      return res.status(404).json({ message: "Movie not found" });

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
