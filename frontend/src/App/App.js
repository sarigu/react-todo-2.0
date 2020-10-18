import React from 'react';
import './App.css';
import Todos from '../pages/todos';
import Form from '../pages/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../pages/nav';
import Theme from '../components/theme';
import About from '../pages/about';
import axios from 'axios';
import uuid from 'react-uuid';
import chroma from 'chroma-js';

let emoji = "";

class App extends React.Component {
  state = {
    todos: [],
    backgroundColor: "fff"
  };

  componentDidMount = () => {
    axios.get("/todos").then(response =>
      this.setState({ todos: response.data.data })
    );
  }

  handleDelete = todoId => {
    axios.delete("/todos/" + todoId).then(response =>
      this.setState({ todos: response.data.data })
    );
  };

  handleEmoji = emojiObject => {
    emoji = emojiObject;
  };

  handleAddedTodo = (e) => {
    e.preventDefault();

    const addedTodo = e.target.previousSibling.value;
    const id = uuid();
    const selectedEmoji = emoji;

    const newTodo = {
      id: id,
      emoji: selectedEmoji,
      todo: addedTodo
    }

    axios.post('/todos', newTodo).then(response =>
      this.setState({ todos: response.data.data })
    );
  };

  handleColorChange = selectedColor => {
    this.setState({ backgroundColor: selectedColor });
    sessionStorage.backgroundColor = selectedColor;

    let color = chroma(selectedColor);
    let lightness = color._rgb[0] * 0.2126 + color._rgb[1] * 0.7152 + color._rgb[2] * 0.0722;
    if (lightness < 50) {
      document.documentElement.style.setProperty("--main-color", "#ffffff");
      document.documentElement.style.setProperty("--border-color", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--main-color", "#000000");
      document.documentElement.style.setProperty("--border-color", "#000000");
    }
  };


  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: this.state.backgroundColor }}>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <div>
                <h1>Todo</h1>
                <Form onAdded={this.handleAddedTodo} onAddedEmoji={this.handleEmoji} />
                <Todos todos={this.state.todos} onDelete={this.handleDelete} />
                <Theme onColorChange={this.handleColorChange} />
              </div>
            </Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;