// packages

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// boiler plate
app.use(bodyParser());
// tell express to use mustache and bodyparser
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('views'));

// arrays
let pendingTodos = [];
let doneTodos = [];
let last_id = 0;


// homepage
app.get('/', function(req, res) {
  res.render(
    'form', {
      todos: pendingTodos, //this array is holdign all of pending todos
      done: doneTodos, //this array is holding all of completed todos
    }
  );
});
// store an id to track how many todo objects i have already added
// increase this before a new todo object is created

app.post('/', function(req, res) {
  last_id += 1;


pendingTodos.push ({
  id: last_id,
  text: req.body.item

});

// refresh wiht new data
res.redirect('/');

  // we need to create a new todo objext to store the text of the user's todo message

  // let todo_object = {id: last_id,text: todo_text};


  // add the todo object to  array of pending todo's
  // pendingTodos.push({
  //   id: last_id,
  //   text: req.body.item
  // });


  // redirect the user back to homepage and force a refresh
});

// submit page

app.post('/:id', function(req, res) {
  // this is the ID for the todo that the user clicked "mark complete" on
  let id = req.params.id;

  // find pending todo objects that match the supplied ID
  // then store them into an array for further processing
  pending = pendingTodos.filter(function(li) {
    return li.id == id;
  });
  // remove each pending todo object that matches the id requested from the pending array and add it to the done array
  pending.forEach(function(li) {
      // find index the targeted todo object is in the pending array
      let index = pendingTodos.indexOf(li);
      if (index != -1) {
// remove targeted todo object from pending array
pendingTodos.splice(index, 1);
}
    // add our targeted todo object to our done array
    doneTodos.push(li);
  });
// redirect the user back to the home page so the page will be forced to refresh with the newly modified arrays
res.redirect('/');
});

// make express listen on port 3000
app.listen(3000, function() {
  console.log('YOU Good, app is running');
});
