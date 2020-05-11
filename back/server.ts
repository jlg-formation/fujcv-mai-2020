import express from "express";
import serveIndex from "serve-index";
import { ws } from "./ws";
import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "gestion-stock";
const client = new MongoClient(url, { useUnifiedTopology: true });

const app = express();

(async function () {
  try {
    await client.connect();
    console.log("Connected successfully to the database server");

    const db = client.db(dbName);

    app.use("/ws", ws(db));

    app.use((req, res, next) => {
      console.log("on a recu un appel");
      next();
    });

    app.use(express.static("public"));
    app.use(serveIndex("public"));

    app.listen(3000, () => {
      console.log("server started with success");
    });
  } catch (err) {
    console.log("err: ", err);
  }
})();
