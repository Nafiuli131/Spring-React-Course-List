import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import PostComponent from './components/PostComponent';

function App() {
  return (
    <div className="App">
        <PostComponent />
        <UserComponent />
    </div>
  );
}

export default App;