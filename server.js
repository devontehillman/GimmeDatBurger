const express = require('express');
const orm = require('./config/orm.js');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_contoller');

// Create an instance of the express app.
const app = express();

const PORT = process.env.PORT || 8080;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Initializing template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);