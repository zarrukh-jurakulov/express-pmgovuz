const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 8081;
const usefulLinksRoute = require('./routes/usefulLinks.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/useful-links', usefulLinksRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
