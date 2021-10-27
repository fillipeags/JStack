require('express-async-errors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => { // Error handler
  console.log('Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
