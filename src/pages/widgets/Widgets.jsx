import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Wiki from "./components/Wiki";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red The Color Red",
    value: "red",
  },
  {
    label: "The Color Green The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue A Shade of Blue",
    value: "blue",
  },
];

const Widgets = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="widgets">
      <div className="row">
        <div className="col-12">
          <h3 className="section-title">Widgets</h3>
          <p className="subtitle">
            A bunch of apps to practice hooks in React.
          </p>
        </div>
      </div>
      <div className="row">
        {/* <Accordion items={items} /> */}
        {/* <Wiki /> */}
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </div>
    </div>
  );
};

export default Widgets;
