import logo from './logo.svg';
import React from 'react';
import './App.css';
import HeaderPage from './HeaderPage';
import NavBar from './NavBar';
import RecipeContainer from './RecipeContainer';
import Favorites from './Favorites';
function App() {
  return (
    <div className='App'>
      <HeaderPage />
      <NavBar />
      <RecipeContainer />
      <Favorites />
      This is the start of a beautiful thing
    </div>

  );
}

export default App;
