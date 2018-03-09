import *  as actionTypes from './actionTypes'

export const changeTurn = () => ({
    type: actionTypes.CHANGE_TURN
})

export const hitCard = (isFirstPlayer, id, damage) => {
    return {
        type: actionTypes.HIT_CARD,
        isFirstPlayer,
        id,
        damage
    }
}