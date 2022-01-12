import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={item.title} className={`card ${active}`}>
        <div
          className="card-header"
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <h3 className="title">{item.title}</h3>
        </div>
        <div className="card-body">{item.content}</div>
      </div>
    );
  });

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h1 className="section-title">Accordion</h1>
          <p className="subtitle">
            Primitive implementation of Accordion component using Hooks
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">{renderedItems}</div>
      </div>
    </div>
  );
};

export default Accordion;
