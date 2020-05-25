import express from "express";
import mongoose, { Schema } from "mongoose";

const Article = mongoose.model(
  "Article",
  new Schema(
    {
      name: { type: String, required: true },
      price: Number,
      nature: String,
    },
    {
      collection: "articles",
      strict: true,
    }
  )
);

const app = express.Router();

app.use(express.json());

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (error) {
    res.status(500).end();
  }
});

app.get("/articles/:myNiceId", async (req, res) => {
  const id = req.params.myNiceId;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "id not well formatted" });
  }
  try {
    const article = await Article.findById(id);
    if (article === null) {
      return res.status(404).end();
    }
    res.json(article);
  } catch (error) {
    res.status(500).end();
  }
});

app.post("/articles", async (req, res) => {
  try {
    const article = new Article(req.body);
    const check = article.validateSync();
    if (check) {
      return res.status(400).json(check);
    }
    const result = await article.save();
    res.status(201).json(result);
  } catch (err) {
    console.error("err: ", err);
    res.status(500).end();
  }
});

app.delete("/articles", async (req, res) => {
  try {
    await Article.deleteMany({});
    res.status(204).end();
  } catch (error) {
    console.log("error: ", error);
    res.status(500).end();
  }
});

app.delete("/articles/:id", async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "id not well formatted" });
  }
  try {
    await Article.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

app.put("/articles/:id", async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "id not well formatted" });
  }
  try {
    const article = await Article.findById(id);
    if (article === null) {
      return res.status(404).end();
    }
    await article.replaceOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

app.patch("/articles/:id", async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "id not well formatted" });
  }
  try {
    await Article.findByIdAndUpdate(id, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

app.patch("/articles", async (req, res) => {
  try {
    await Article.updateMany({}, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

export const rest = app;
