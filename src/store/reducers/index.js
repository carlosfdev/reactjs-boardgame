import { combineReducers } from 'redux'

import boardReducer from './board'

const initialState = {
    isFirstPlayer: true
}

const turnReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_TURN')
        return { ...state, isFirstPlayer: !state.isFirstPlayer }
    return state
}

const rootReducer = combineReducers({
    turn: turnReducer,
    board: boardReducer
})

export default rootReducer