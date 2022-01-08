import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active": null;

    return (
      <div key={item.text} className="card">
        <div className={`card-header ${active}`} onClick={() => { onTitleClick(index); } }>
          <h3 className="title">
            {item.title}
          </h3>
        </div>
        <div className={`card-body ${active}`}>
          {item.content}
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>
};

export default Accordion;