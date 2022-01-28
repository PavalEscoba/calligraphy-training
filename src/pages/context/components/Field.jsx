import React from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="field mb-4">
        <label className='form-label'>{text}</label>
        <input className='form-control' type="text" />
      </div>
    );
  };
};


export default Field;
