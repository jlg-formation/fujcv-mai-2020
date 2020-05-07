import express from "express";

const app = express.Router();

app.use(express.json());

const articles = [
  { name: "paire de chaussette", prix: "32" },
  { name: "paire de chaussure", prix: "310" },
  { name: "masque", prix: "10" },
  { name: "slip", prix: "5" },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.get("/articles/:myNiceId", (req, res) => {
  const i = req.params.myNiceId;
  res.json(articles[i]);
});

export const rest = app;
