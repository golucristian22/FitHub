const express = require("express");

const app = express();

const { db } = require("./config/database");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.query(sql, [username, password], (err, result) => {
    if (err) res.json({ message: "ERROR: Username already exist" });
    res.json({ message: "User successfully created" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username=? AND BINARY password=?;`;
  db.query(sql, [username, password], (error, result) => {
    if(error) res.status(404).json({ message: `ERROR: Something went wrong`});
    if(result.length > 0) {
      res.json({ message: `Welcome back, ${username}!`});
    } else {
      res.status(404).json({ message: "Incorrect username or password"});
    }
  })
});

app.listen(8000);
