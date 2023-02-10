//imports
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//listen for the app on whatever port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
