import React from 'react';
import './App.css';
import {Route, NavLink, Navigate, Routes} from "react-router-dom"
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Routes>
        <Route exact path={"/"} element={<PokemonList />} />
        <Route exact path={"/pokemon/:pokemon"} element={<Pokemon/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </div>
  );
}

export default App;
