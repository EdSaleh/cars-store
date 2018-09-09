const APIs = require('./src/backend/api');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const http = require('http').createServer(app);
const port = 3000;



const routes = express.Router(); APIs(routes);
app.use('/api', routes);


http.listen(port, function() {
  console.log("Listening http://localhost:" + port);
});

