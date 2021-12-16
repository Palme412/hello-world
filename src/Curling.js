import React, { Component } from "react";

// Hockey
const curling = {
    name: "Tyler Shuster",
    team: "USA",
};

const payload = [
    {
        name: "Player 2",
        team: "Team 2",
    },
    {
        name: "Player 3",
        team: "Team 3",
    },
    {
        name: "Player 4",
        team: "Team 4",
    },
    {
        name: "Player 5",
        team: "Team 5",
    },
];

const displayCurling = payload.map((curling, idx) => {
    return (
        <div key={idx}>
            <h1>Name {curling.name}</h1>
            <p>Team {curling.team}</p>
        </div>
    );
});

class Curling extends Component {
    render() {
        return (
            <div>
                <h1>Curling</h1>
                <div>
                    <h1>{curling.name}</h1>
                    <p>{curling.team}</p>
                </div>
                {displayCurling}
            </div>
        );
    }
}

export default Curling;