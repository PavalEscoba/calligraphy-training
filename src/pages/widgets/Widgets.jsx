import React from 'react';

import Accordion from './components/Accordion'

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
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const Widgets = () => {
    return (
      <div className="accordion">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="section-title">
              Widgets
            </h3>
            <p className="subtitle">
              A bunch of apps to practice hooks in React.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Accordion items={items}/>
          </div>
        </div>
      </div>
    );
};

export default Widgets;