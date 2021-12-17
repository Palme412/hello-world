import React, { Component } from 'react'
import './App.css';

// Components
import Racing from './Racing';
import Hockey from './Hockey';
import Football from './Football';
import Curling from './Curling';
import Cover from './Cover';
import Forum from './Forum';
import Band from './Band';

// Basketball
const basketPlayer = {
  name: 'Steph Curry',
  team: 'Warriors'
}

const bballPayload = [
  {
    name: 'Basketball Player 2',
    team: 'Team 2'
  },
  {
    name: 'Basketball Player 3',
    team: 'Team 3'
  },
  {
    name: 'Basketball Player 4',
    team: 'Team 4'
  },
  {
    name: 'Basketball Player 5',
    team: 'Team 5'
  }
]

const displayBasketballPlayers = bballPayload.map((player, idx) => {
  return (
    <div key={idx}>
      <h1>Name {player.name}</h1>
      <p>Team {player.team}</p>
    </div>
  );
});

// will be an array of all players on Team 4
const searchTeam4 = bballPayload.filter((player, idx) => {
  if (player.team === 'Team 4') {
    return true;
  } else {
    return false;
  }
});

const displayTeam4 = searchTeam4.map((player, idx) => {
  return (
    <div key={idx}>
      <h1>Player {player.name}</h1>
      <p>Team {player.team}</p>
    </div>
  )
})

// console.log(searchTeam4);

class App extends Component {
  render() {
    return (
      <div className="App">

        <Band />
      </div>
    )
  }
};


export default App; // ES6 syntax for exporting

// functional component -> made out of a function
// class component -> is made out of a class