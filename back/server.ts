import express from "express";
import serveIndex from "serve-index";
import { ws } from "./ws";

const app = express();

app.use('/ws', ws);

app.use((req, res, next) => {
  console.log("on a recu un appel");
  next();
});

app.use(express.static("public"));
app.use(serveIndex("public"));

app.listen(3000, () => {
  console.log("server started with success");
});
