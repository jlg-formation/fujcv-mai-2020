import express from "express";
import serveIndex from "serve-index";
import { ws } from "./ws";
import mongoose from "mongoose";

const app = express();

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/gestion-stock", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to the database server");

    app.use("/ws", ws);

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
