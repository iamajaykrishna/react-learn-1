import React from "react";
import "./style.css";
import SubApp1 from "./SubApp1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: "Type here..."
    };
  }

  testFunctionToBind() {
    alert("Binded");
  }

  render() {
    return (
      <div>
        <h1>Hello Folks!</h1>
        <h3>Below contents are from SubApps!</h3>
        <SubApp1
          AppState={this.state}
          testFunctionToBind={this.testFunctionToBind.bind(this)}
        />
      </div>
    );
  }
}

export default App;
