import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  state = {
    Person: {
      fullName: "Aziz Jemli",
      bio: "Full Stack Developer and Graphic Designer.",
      imgSrc: "profilepic.jpg",
      profession: "FullStack Developer",
    },
    shows: true,
    count: 0,
  };
  
  booleanSwitcher = () => {
    this.setState({ shows: !this.state.shows });
  };
  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  componentDidMount() {
    
    setInterval(this.incrementCount, 1000);
  }
  

  render() {
    return (
      <div className="App">
        
        {this.state.shows ? (
          <div className="card-container">
            <img
              src={this.state.Person.imgSrc}
              alt="MyImage"
              className="round"
            />
            <h1 style={{ color: "#fff" }}>{this.state.Person.fullName} </h1>
            <h2 style={{ color: "#FDBA0B" }}>
              {this.state.Person.profession}
            </h2>
            <p> {this.state.Person.bio} </p>
          </div>
        ) : (
          <div></div>
        )}
        
        <h3>
          The component has been mounted since:
          <span style={{ color: "red" }}> {this.state.count} </span> seconds.
        </h3>
        <button onClick={this.booleanSwitcher}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
      </div>
    );
  }
}

export default App;