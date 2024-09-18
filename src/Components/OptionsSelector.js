import React, { useState } from 'react';
import './OptionsSelector.css';

const OptionsSelector = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('optionA');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='Selecting_option'>
      <p>Select an option: 
        <span className='Options'>
          <span
            className={`Option  ${selectedOption === 'optionA' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('optionA')}
          >
            {selectedOption === 'optionA' && <span className='SelectedIndicator'>&#9679;</span>}
            Question
          </span>
          <span
            className={`Option ${selectedOption === 'optionB' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('optionB')}
          >
            {selectedOption === 'optionB' && <span className='SelectedIndicator'>&#9679;</span>}
            Article
          </span>
        </span>
      </p>
    </div>
  );
};

export default OptionsSelector;
