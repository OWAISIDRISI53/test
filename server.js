const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello this is Owais ");
});

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
