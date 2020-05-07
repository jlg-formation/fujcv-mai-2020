const express = require("express");

const app = express();

app.get("/toto", (req, res) => {
  res.send("Hello JL!");
});

app.listen(3000, () => {
  console.log("server started with success");
});

console.log("coucou");
