import React, { useState } from "react";
import DropdownInput from "./DropdownInput";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Belarusian",
    value: "be",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Hebrew",
    value: "he",
  },
  {
    label: "Polish",
    value: "pl",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("love");
  return (
    <>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="search-text">Please type a text</label>
          <input
            type="text"
            id="search-text"
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <DropdownInput
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Choose a language"
      />
      <div className="col-12">
        <h3 className="title">Result:</h3>
        <Convert language={language} text={text} />
      </div>
    </>
  );
};

export default Translate;
