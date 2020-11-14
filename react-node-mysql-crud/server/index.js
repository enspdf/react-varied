const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "CRUDDATABASE",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = " SELECT * FROM movie_reviews ";

  db.query(sqlSelect, (error, result) => {
    console.log("Error: ", error);
    console.log("Result: ", result);

    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const { movieName, movieReview } = req.body;

  const sqlInsert =
    " INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?) ";

  db.query(sqlInsert, [movieName, movieReview], (error, result) => {
    console.log("Error: ", error);
    console.log("Result: ", result);
  });

  res.send({ ok: true });
});

app.delete("/api/delete/:movieName", (req, res) => {
  const { movieName } = req.params;

  const sqlQuery = " DELETE FROM movie_reviews WHERE movieName = ? ";

  db.query(sqlQuery, movieName, (error, result) => {
    console.log("Error: ", error);
    console.log("Result: ", result);
  });
});

app.put("/api/update", (req, res) => {
  const { movieName, movieReview } = req.body;

  const sqlQuery =
    " UPDATE movie_reviews SET movieReview = ? WHERE movieName = ? ";

  db.query(sqlQuery, [movieReview, movieName], (error, result) => {
    console.log("Error: ", error);
    console.log("Result: ", result);
  });
});

app.listen(3001, () => {
  console.log("Running on port 30001");
});
