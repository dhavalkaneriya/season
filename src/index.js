import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     //       function position(position) {
//     //     console.log("position", position);
//     //   }
//     position => console.log("position", position),
//     error => console.log("error", error)
//   );

//   return <div>hi there123</div>;
// };

class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       latitude: null,
  //       message: null
  //     };
  //   }

  state = {
    latitude: null,
    message: null
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log("position", position);
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ message: error.message });
      }
    );
  }

  render() {
    if (this.state.message && !this.state.latitude) {
      return (
        <div
          style={{
            position: "relative",
            top: "50px",
            textAlign: "center",
            fontSize: "25px"
          }}
        >
          {this.state.message}
        </div>
      );
    }

    if (!this.state.message && this.state.latitude) {
      return (
        <div
          style={{
            position: "relative",
            top: "50px",
            textAlign: "center",
            fontSize: "25px"
          }}
        >
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }

    return (
      <div
        style={{
          position: "relative",
          top: "50px",
          textAlign: "center",
          fontSize: "25px"
        }}
      >
        Loading......
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
