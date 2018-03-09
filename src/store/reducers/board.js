import * as actionTypes from '../actions/actionTypes'

const initialState = {
    player1: {
        cards: [
            {id: 1, name: 'Tranchetemon', race: 'Digimon', health: '150', power: '200'},
            {id: 2, name: 'Tranchete Gris', race: 'Mage', health: '75', power: '300'},
            {id: 3, name: 'Tranchete Dobby', race: 'Domestic Elf', health: '50', power: '500'},
        ]
    },
    player2: {
        cards: [
            {id: 4, name: 'Tranchetemon 2', race: 'Digimon', health: '150', power: '200'},
            {id: 5, name: 'Tranchete Gris 2', race: 'Mage', health: '75', power: '300'},
            {id: 6, name: 'Tranchete Dobby 2', race: 'Domestic Elf', health: '50', power: '500'},
        ]
    },
}

const hitCard = (deck, id, damage) => {
    return deck
        .map(card => {
            if (id === card.id)
                return {...card, health: card.health - damage}
            return card
        }).filter(card => card.health > 0)
}

const whoHit = (state, action) => {
    let playerHit = action.isFirstPlayer ? 'player2' : 'player1'
    return {
        ...state,
        [playerHit]: {...state[playerHit], cards: hitCard(state[playerHit].cards, action.id, action.damage)}
    }
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HIT_CARD:
            return whoHit(state, action)
    }
    return state
}

export default boardReducer