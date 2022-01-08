import React from "react";

import unsplash from "./api/unsplash";
import SearchBar from "./components/Searchbar";
import ImageList from "./components/ImageList";

class Pics extends React.Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="section-title">Pics</h1>
            <p className="subtitle">The application searchs for pictures of any kind.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <SearchBar submittingFunction={this.onFormSubmit} />
          </div>
          <div className="col-sm-12">
            <ImageList images={this.state.images} />
          </div>
        </div>
      </>
    );
  }
}

export default Pics;
