//in normal javascript
// const divele = document.createElement("div");
// divele.innerText = "this is div";
//append this div some where

// import React from "react";
// const spanele = React.createElement("span");
// React.createElement("div", {},[spanele]); //first (element) second is (pass data) third (what children will it have)
// {
//   /* <div>
//   <span></span>
// </div>; */
// }
// export default App;
import React from "react";
//this is avaible for only this component and its children
//this can also be used by previous generation also due to bundelling
import "./App.css";
import Color from "./color";
import Timer from "./timer";
class App extends React.Component {
  constructor() {
    //always use super to impliment functions of component class
    super();
    //state is alwyas an object
    //when state varailbe is updated than render function call again automatically
    this.state = {
      //all thge varaibles
      count: 0,
      name: "Himanshu",
      products: ["shoes", "pants", "Tshirts"],
      setColor: "",
    };
  }

  // we can pass function to a props also
  changeSelectedColor = (newcolor) => {
    this.setState({
      setColor: newcolor,
    });
  };
  //class weill always have a render function
  render() {
    const color = ["red", "blue", "green", "brown", "yellow"];
    // let count = 0;
    //in render we will wirte the js
    //return what ever you want so on the screen
    return (
      <>
        <h1 className="something">Welcome {this.state.name}</h1>
        <h1>Counter Application</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={(e) => {
            //e is a syntetic event
            console.log(e);
            // count++;

            //we cannot directly mutate or change the state varaibles
            // this.state.count++;

            if (this.state.count < 15) {
              //we will use the special Method called set state
              //set state is a funtion to which you pass an object
              //in object you can only pass those properties you want to change
              this.setState({
                count: this.state.count + 1,
              });
            }

            // console.log(count);
            //only react can call this render function
            // this.render();
          }}
        >
          Increament count
        </button>
        <button
          onClick={(e) => {
            //e is a syntetic event
            if (this.state.count > 0) {
              this.setState({
                count: this.state.count - 1,
              });
            }
          }}
        >
          Decreament count
        </button>

        {/* How to render List */}
        <h1 className="something">How to render List</h1>
        <ul>
          {/* we cannot write the for, forof,forin,while,dowhile loop in jsx */}
          {this.state.products.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        {/* paint app=> when we click on color it changes bg wrt to colr we click */}
        {/* when we see {{}} 1 for js and other for object */}
        <h1 className="something" style={{ textAlign: "center" }}>
          Paint App
        </h1>
        <div style={{ backgroundColor: this.state.setColor }}>
          <div
            className="color-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              height: "200px",
            }}
          >
            {color.map((itemColor) => {
              {
                /* passing function to props */
              }
              {
                /* when you are psssing function as a prop pass it as a reference */
              }
              return (
                <Color
                  itemColor={itemColor}
                  changeColor={this.changeSelectedColor}
                />
              );
            })}
          </div>
        </div>
        <Timer />
      </>
    );
  }
}

export default App;
