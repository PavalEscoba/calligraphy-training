import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.submittingFunction(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} autoComplete="off">
        <label htmlFor="search-input">Image search:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="search-input"
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value}) }/>
        </div>
      </form>
    )
  };
};

export default SearchBar;