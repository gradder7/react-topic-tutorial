import React from "react";

class Color extends React.Component {
  constructor() {
    super();
  }
  render() {
    // props get by the imiditae parent only
    //we will get the props objects
    return (
      <div
        className="color"
        style={{ backgroundColor: this.props.itemColor, cursor: "pointer" }}
        onClick={() => {
            this.props.changeColor(this.props.itemColor);
        }}
      ></div>
    );
  }
}
export default Color;
