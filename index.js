const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/jobs', db.getJobs);
app.get('/salaries', db.getTotalSalaryByLocation);
app.get('/hire', db.hireCandidate);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});