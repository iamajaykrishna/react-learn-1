import React from "react";

class SubApp1 extends React.Component {
  handleClick(event) {
    event.target.value = "";
  }

  render() {
    return (
      <div>
        <h1>From SubApp1</h1>
        <input
          type="text"
          placeholder={this.props.AppState.placeHolder}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default SubApp1;
