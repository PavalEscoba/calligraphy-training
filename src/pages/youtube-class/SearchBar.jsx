import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onSearchInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} autoComplete="off">
        <label htmlFor="search-input">Video search:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="search-input"
            value={this.state.term}
            onChange={this.onSearchInputChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
