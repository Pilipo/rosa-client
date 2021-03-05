import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Appbar from './components/Appbar';
import Recipes from './components/Recipes';
import CreateRecipe from './components/Recipes/CreateRecipe';
import './App.css';

function App() {
  const [recipeIn, setRecipeIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <NavBar />
      <Appbar
        onSearchClick={() => setShowSearch(!showSearch)}
        onAddRecipeClick={() => setRecipeIn(true)}
      />
      <div className="content-holder">
        {recipeIn
          ? <CreateRecipe onClick={() => setRecipeIn(false)} />
          : <Recipes />}
      </div>
    </div>
  );
}

export default App;
