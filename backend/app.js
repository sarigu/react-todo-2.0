const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;

var jsonParser = bodyParser.json();

let todos = [
    { id: "1", emoji: '😂', todo: 'Add a todo' },
    { id: "2", emoji: '🏵️', todo: 'Or more than one' },
    { id: "3", emoji: '🐲', todo: 'Ticking of a todo is fun' },
    { id: "4", emoji: '🤩', todo: 'You can delete a todo too' }
];

app.get("/todos", (req, res) => {
    return res.send({ data: todos });
});

app.delete("/todos/:id", (req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.id);
    return res.send({ data: todos });
});

app.post('/todos', jsonParser, (req, res) => {

    let newTodo = {
        id: req.body.id,
        emoji: req.body.emoji,
        todo: req.body.todo
    };

    todos.push(newTodo);

    return res.send({ data: todos });

})

app.listen(port, () => console.log("works"));