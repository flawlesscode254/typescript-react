import React from 'react';
import './App.css';

import Names from './Names';

function App() {
  return (
    <div className="App">
      <h1>What is happening</h1>
      <Names 
        username="Duncan"
        email="duncanii414@gmail.com"
        body="Wow"
        comment="Nice"
      />
    </div>
  );
}

export default App;
