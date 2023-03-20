const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

const todos = [
  {
    title: "Sleep",
    ready: false,
  },
  {
    title: "Code",
    ready: false,
  },
  {
    title: "Eat",
    ready: true,
  },
  {
    title: "Repeat",
    ready: false,
  },
];

app.get("/initial_todos", (req, res) => {
  try {
    res.send({ todos });
  } catch (err) {
    throw err;
  }
});

app.post("/new_todo", (req, res) => {
  const newTodo = req.body;

  try {
    todos.push(newTodo);

    res.send({ message: "success" });
  } catch (err) {
    throw err;
  }
});

app.put("/todos/:index", (req, res) => {
  const index = req.params.index;
  const updatedTodo = req.body;

  if (index >= todos.length) {
    return res.status(404).send("Todo not found");
  }

  todos[index] = { ...todos[index], ...updatedTodo };

  res.send(todos[index]);
});

app.delete("/todos/:index", (req, res) => {
  const index = req.params.index;

  if (index >= todos.length) {
    return res.status(404).send("Todo not found");
  }

  const deletedTodo = todos.splice(index, 1);

  res.send(deletedTodo[0]);
});

app.listen(8000, function () {
  console.log("Todo-list app listening on port 8000.");
});
