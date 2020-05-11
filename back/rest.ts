import express from 'express';

const app = express.Router();

app.use(express.json());

const articles = [
  { id: 0, name: 'paire de chaussette', prix: '32' },
  { id: 1, name: 'paire de chaussure', prix: '310' },
  { id: 2, name: 'masque', prix: '10' },
  { id: 3, name: 'slip', prix: '5' },
];

const obj = { id: 4 };

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.get('/articles/:myNiceId', (req, res) => {
  const i = req.params.myNiceId;
  if (articles[i] === undefined) {
    res.status(404).end();
    return;
  }
  res.json(articles[i]);
});

app.post('/articles', (req, res) => {
  const article = req.body;
  article.id = obj.id;
  obj.id++;
  articles.push(article);
  res.status(201).json(article);
});

app.delete('/articles', (req, res) => {
  articles.length = 0;
  res.status(204).end();
});

export const rest = app;
