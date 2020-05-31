import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="glenn">
          {this.state.monsters.map((monster) => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              <p>{monster.email}</p>
            </div>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
