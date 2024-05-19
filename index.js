const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
