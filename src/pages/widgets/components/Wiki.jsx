import React, { useState, useEffect } from "react";
import axios from "axios";

const Wiki = () => {
  const [term, setTerm] = useState("book");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const onInputChange = (e) => {
    setTerm(e.target.value);

    if (term === "") {
      setResults([]);
    }
  };

  const renderedResults = results.map((result) => {
    return (
      <li
        id={result.pageid}
        key={result.pageid}
        className="list-group-item d-flex justify-content-between align-items-start py-4"
      >
        <div className="list-group-item__text-wrapper mr-3">
          <h3
            className="title text-secondary mb-2"
            dangerouslySetInnerHTML={{ __html: result.title }}
          />
          <p
            className="dark-text"
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          />{" "}
        </div>
        <a
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          className="btn btn-success"
          target="_blank"
          rel="noreferrer"
        >
          Go{" "}
        </a>
      </li>
    );
  });
  return (
    <>
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Wikipedia Search</h1>
            <p className="subtitle">
              App for searching in Wikipedia (english only) using Hooks{" "}
            </p>
          </div>
          <div className="col-sm-6">
            <div className="wiki">
              <div className="form">
                <label htmlFor="search-input">Search input:</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="search-input"
                    autoComplete="off"
                    value={term}
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <ul className="list-group mt-4">
              {debouncedTerm ? renderedResults : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wiki;
