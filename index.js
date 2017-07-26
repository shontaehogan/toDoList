const express = require('express');
const mustacheExpress = require('mustache-express');
// const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();


  // tell express to use mustache
  app.engine('mustache', mustacheExpress());
  app.set('views', './views');
  app.set('view engine', 'mustache');


  // configure the /form path
  app.get('/form', function(req, res) {
    // res.send('Hello Page')
    res.render('form');

  });
  // configure the / path
  app.get('/', function(req, res) {
    // res.send('Hello Page')
    res.render('home', home);

  });


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));


  app.post('/addtodos', function(req, res) {
    let todos = req
  }


// make express listen on port 3000
app.listen(3000, function() {
  console.log('YOU Good, app is running');
});
