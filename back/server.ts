const express = require("express");
const serveIndex = require("serve-index");

// titi toto
const app = express();

app.use((req, res, next) => {
  console.log("on a recu un appel");
  next();
});

app.use(express.static("public"));
app.use(serveIndex("public"));

app.listen(3000, () => {
  console.log("server started with success");
});
