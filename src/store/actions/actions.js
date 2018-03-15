import *  as actionTypes from './actionTypes'

export const changeTurn = () => ({
    type: actionTypes.CHANGE_TURN
})

export const hitCard = (playerTurn, id, damage) => {
    return {
        type: actionTypes.HIT_CARD,
        playerTurn,
        id,
        damage
    }
}