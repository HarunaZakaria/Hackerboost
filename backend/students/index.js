const express = require("express");
const app = express();
const port = 8000;

//root route
app.get("/", (req, res) => {
  res.send("Hello Students");
});

//listen on
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
