import { combineReducers } from 'redux'

import boardReducer from './board'

const initialState = {
    playerTurn: 1
}

const turnReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_TURN')
        return { ...state, playerTurn: state.playerTurn === 1 ? 2 : 1}
    return state
}

const rootReducer = combineReducers({
    turn: turnReducer,
    board: boardReducer
})

export default rootReducer