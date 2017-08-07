Use Express to build a todo list application. In order to keep the list of todos, you will need to create some data structure and update it from Express, like this example:
  const todos = [
  "Wash the car"
  ];

  app.get("/", function (req, res) {
    res.render('index', { todos: todos });
    });

    app.post("/", function (req, res) {
      todos.push(req.body.todo);
      res.redirect('/');
      })
You should be able to add new todos and mark todos as complete.

Because your data is being stored in memory, it will disappear every time your app is restarted. It is easiest to seed some todos and completed todos at the start of your app so that you can see them after a restart.
