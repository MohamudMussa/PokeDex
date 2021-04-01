import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';



function App() {

  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});

  const URL = 'https://pokeapi.co/api/v2/pokemon/'


  useEffect(() => {
    ecounterWildPokemon()

  }, [])

  const pokeId = () => {

    const min = Math.ceil(1)
    const max = Math.floor(151)
    return Math.floor(Math.random() * (max - min + 1)) + min

  }

  const ecounterWildPokemon = () => {
    axios.get(URL + pokeId())
      .then(response => {
        setWildPokemon(response.data)

      })

  }


  return (
    <div class="">
      <header>
        <h1 class="text-5xl font-mono">PokeDex </h1>
        <p class="text-lg ...">by Mohamud Mussa</p>
      </header>

      <section className='wildName'>
        <h2>Wild Encounter</h2>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" />
        <h3>{wildPokemon.name}</h3>
        <button className="catch-btn">Catch</button>
      </section>


      <section>
        <h2>PokeDex</h2>

        <div className='pokedex-list'>
          {pokedex.map(pokemon => {
            <div className='pokemon' key={pokemon.id}>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" />


            </div>
          })}


        </div>
      </section>

    </div>


  )

};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


