import React, { Component } from "react";

// Hockey
const captain = {
    name: "Alex Ovechkin",
    team: "Capitals",
};

const payload = [
    {
        name: "Skater 2",
        team: "Team 2",
    },
    {
        name: "Skater 3",
        team: "Team 3",
    },
    {
        name: "Skater 4",
        team: "Team 4",
    },
    {
        name: "Skater 5",
        team: "Team 5",
    },
];

const displayCaptains = payload.map((captain, idx) => {
    return (
        <div key={idx}>
            <h1>Name {captain.name}</h1>
            <p>Team {captain.team}</p>
        </div>
    );
});

class Hockey extends Component {
    render() {
        return (
            <div>
                <h1>Hockey</h1>
                <div>
                    <h1>{captain.name}</h1>
                    <p>{captain.team}</p>
                </div>
                {displayCaptains}
            </div>
        );
    }
}

export default Hockey;