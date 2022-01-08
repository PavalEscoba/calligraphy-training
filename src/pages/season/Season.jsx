import React from "react";

import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";

class Season extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (!this.state.lat && !this.state.errorMessage) {
      return (
        <div className="col-12 text-center">
          <Spinner />
        </div>
      );
    }
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage) {
      return <p> Error: {this.state.errorMessage}</p>;
    }
  }

  render() {
    return (
      <div className="season">
        <h1 className="title">Season</h1>
        <p className="subtitle">
          The application detects where you are and reports whether it is winter
          or summer outside.
        </p>
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Season;
