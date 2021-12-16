import React, { Component } from "react";

// Hockey
const football = {
    name: "Matt Stafford",
    team: "Rams",
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

const displayFootball = payload.map((football, idx) => {
    return (
        <div key={idx}>
            <h1>Name {football.name}</h1>
            <p>Team {football.team}</p>
        </div>
    );
});

class Football extends Component {
    render() {
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>{football.name}</h1>
                    <p>{football.team}</p>
                </div>
                {displayFootball}
            </div>
        );
    }
}

export default Football;