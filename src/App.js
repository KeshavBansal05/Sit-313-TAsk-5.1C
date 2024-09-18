import React, { useState } from 'react';
import './App.css';
import CenteredBar from './Components/Bar';
import OptionsSelector from './Components/OptionsSelector';
import CustomSection from './Components/CustomSection';
import ArticleSection from './Components/Article';


function App() {
  const [selectedOption, setSelectedOption] = useState('question'); // Default to 'question'

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
 
  return (
    
    <div className="App">
      <CenteredBar/>
      <OptionsSelector onSelect={handleOptionSelect} />
      {selectedOption === 'question' ? (
        <CustomSection />
      ) : (
        <ArticleSection />
      )}
     
    </div>
  );
}
export default App;
