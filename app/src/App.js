import React, { Component } from "react";
import FunctionalComponent from "./components/FunctionalComponent";
import CONST from './CONST';

class App extends Component {

  componentDidMount() {
    const URL = `${CONST.HOST}api.php?command=TestCommandAsdf`;
    const postBody = {
        type: "hot",
        limit: 10
    };
    const metadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(URL, metadata)
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header id="test">
          <h1>Welcome to React!!! HIIIII</h1>
        </header>
        <FunctionalComponent testprop={'I\'m a prop passed in from a parent!!'} />
      </div>
    );
  }
}

export default App;