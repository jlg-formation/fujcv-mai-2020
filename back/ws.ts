import express from "express";
import moment from "moment";

moment.locale("fr");

const app = express.Router();

app.use(express.json());

app.get("/hello", (req, res) => res.json({ hello: "world" }));
app.get("/now", (req, res) =>
  res.json({ date: moment().format("Do MMMM YYYY, hh[h]mm[m]ss") })
);

app.post("/echo", (req, res) => {
  res.json({ message: 'vous avez dit ' + req.body.message });
});

export const ws = app;
