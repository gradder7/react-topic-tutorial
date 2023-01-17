// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
class App extends React.Component {
  constructor() {
    //always use super to impliment functions of component class
    super();
    //state is alwyas an object
    //when state varailbe is updated than render function call again automatically
    this.state = {
      //all thge varaibles
      count: 0,
    };
  }
  //class weill always have a render function
  render() {
    // let count = 0;
    //in render we will wirte the js
    //return what ever you want so on the screen
    return (
      <div>
        <h1>Counter Application</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={(e) => {
            //e is a syntetic event
            console.log(e);
            // count++;

            //we cannot directly mutate or change the state varaibles
            // this.state.count++;

            //we will use the special Method called set state 
            //set state is a funtion to which you pass an object
            //in object you can only pass those properties you want to change
            this.setState({
              count: this.state.count + 1,
            });

            // console.log(count);
            // this.render();
          }}
        >
          Increament count
        </button>
      </div>
    );
  }
}

export default App;
