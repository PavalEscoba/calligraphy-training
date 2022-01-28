import React from 'react';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  renderText(value) {
    if(value === 'english') {
      return "Submit"
    }
    return "Vooleggen";
  }

  render () {
    return (
      <ColorContext.Consumer>
      {(color)=> (
        <button className={`btn btn-${color}`}>
          <LanguageContext.Consumer>
            {(value) => this.renderText(value)}
          </LanguageContext.Consumer>
        </button>
      )}
        
      </ColorContext.Consumer>
    );
  };
};

export default Button;
