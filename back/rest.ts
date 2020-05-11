import express from "express";

interface Article {
  name: string;
  prix: number;
}

const app = express.Router();

app.use(express.json());

const articles = [
  { id: 0, name: "paire de chaussette", prix: "32" },
  { id: 1, name: "paire de chaussure", prix: "310" },
  { id: 2, name: "masque", prix: "10" },
  { id: 3, name: "slip", prix: "5" },
];

const obj = { id: 4 };

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.get("/articles/:myNiceId", (req, res) => {
  const i = req.params.myNiceId;
  if (articles[i] === undefined) {
    res.status(404).end();
    return;
  }
  res.json(articles[i]);
});

app.post("/articles", async (req, res) => {
  try {
    // const article = req.body as Article;
    // const result = await db.collection<Article>("articles").insertOne(article);
    // res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error("err: ", err);
    res.status(500).end();
  }
});

app.delete("/articles", (req, res) => {
  articles.length = 0;
  res.status(204).end();
});

app.delete("/articles/:id", (req, res) => {
  const id = +req.params.id;
  const index = articles.findIndex((a) => a.id === id);
  if (index === -1) {
    return res.status(404).end();
  }
  articles.splice(index, 1);
  res.status(204).end();
});

app.put("/articles/:id", (req, res) => {
  // /TODO: if (!check(req.body) ) {
  //   return res.status(400).end();
  // }
  const id = +req.params.id;
  const index = articles.findIndex((a) => a.id === id);
  if (index === -1) {
    return res.status(404).end();
  }
  const article = { id, ...req.body };
  articles.splice(index, 1, article);
  res.status(204).end();
});

app.patch("/articles/:id", (req, res) => {
  // /TODO: if (!check(req.body) ) {
  //   return res.status(400).end();
  // }
  const id = +req.params.id;
  const article = articles.find((a) => a.id === id);
  if (!article) {
    return res.status(404).end();
  }
  Object.keys(req.body).forEach((prop) => {
    article[prop] = req.body[prop];
  });

  res.status(204).end();
});

export const rest = app;
