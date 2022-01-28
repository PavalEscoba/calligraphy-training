import React from 'react';

import UserCreate from './components/UserCreate';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';

class Context extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    
    this.setState({ language });
  };

  render () {
    return (
    <>
      <h1>Context Localization</h1>
      <span>Select a language:</span> 
      <img src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/usa-512.png" alt="usa flag" style={{width: 50, height: 'auto', marginLeft: 16, cursor: 'pointer'}} onClick={() => this.onLanguageChange('english')}
      />
      <img src="https://www.wagrati.eu/media/images/flag-netherlands-1400x933.jpg" alt="dutch flag" style={{width: 56, height: 'auto', marginLeft: 12, cursor: 'pointer'}} onClick={() => this.onLanguageChange('dutch')}/>
      <p className='mb-4'>{this.state.language}</p>

      <ColorContext.Provider value="danger">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </>
    )
  }
};

export default Context;
