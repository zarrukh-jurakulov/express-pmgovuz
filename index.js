require('./db');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;
const usefulLinksRoute = require('./routes/usefulLinks.route');
const organizationTypesRoute = require('./routes/organizationTypes.route');
const organizationsRoute = require('./routes/organizations.route');
const regionsRoute = require('./routes/regions.route');
const districtsRoute = require('./routes/districts.route');
const streetsRoute = require('./routes/streets.route');
const questionTypesRoute = require('./routes/questionTypes.route');
const answerQuestionsRoute = require('./routes/answerQuestions.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/useful-links', usefulLinksRoute);
app.use('/api/organization-types', organizationTypesRoute);
app.use('/api/organizations', organizationsRoute);
app.use('/api/regions', regionsRoute);
app.use('/api/districts', districtsRoute);
app.use('/api/streets', streetsRoute);
app.use('/api/question-types', questionTypesRoute);
app.use('/api/answer-questions', answerQuestionsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
