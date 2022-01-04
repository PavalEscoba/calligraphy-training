import React from "react";

import BackBtn from "../../components/BackBtn";
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
        <BackBtn />
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Season;
