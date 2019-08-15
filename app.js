const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const DEFAULT_PORT = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("homepage"));

app.listen(DEFAULT_PORT, () =>
  console.log(`=== SERVER IS LISTENING ON PORT ${DEFAULT_PORT} ===`)
);
