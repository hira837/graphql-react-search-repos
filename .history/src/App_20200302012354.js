import React from 'react';
import './App.css';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(GITHUB_TOKEN); 

function App() {
  return (
    <div>Hi, GraphQL</div>
  );
}

export default App;
