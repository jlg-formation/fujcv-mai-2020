import express from "express";
import moment from "moment";
import { rest } from "./rest";
import { Db } from "mongodb";

moment.locale("fr");

export const ws = function (db: Db) {
  const app = express.Router();

  app.use("/rest", rest(db));

  app.use(express.json());

  app.get("/hello", (req, res) => res.json({ hello: "world" }));
  app.get("/now", (req, res) =>
    res.json({ date: moment().format("Do MMMM YYYY, hh[h]mm[m]ss") })
  );

  app.post("/echo", (req, res) => {
    res.json({ message: "vous avez dit " + req.body.message });
  });

  return app;
};
