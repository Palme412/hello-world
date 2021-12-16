import React, { Component } from 'react';

const basketPlayer = {
    name: 'Steph Curry',
    team: 'Warriors'
}

const bbalPayload = [
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

class Basketball extends Component {
    render() {
        return (
            <div>
                <h1>Basketball</h1>
                <div>
                    {displayBasketballPlayers}
                    {displayTeam4}
                </div>
            </div>
        )
    }
}

export default Basketball;