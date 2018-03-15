import React, {Component} from 'react'

import './Board.css';

import {connect} from 'react-redux'

import { changeTurn, hitCard } from '../../store/actions/actions'

import Card from '../../components/Card/Card'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hitterCardId: null,
            hitterCardPower: 0
        }
    }

    handleHit = (isFirstPlayer, id, damage) => {
        this.props.onHitCard(isFirstPlayer, id, damage)
        this.props.onPassTurn()
        this.setState({
            hitterCardId: null,
            hitterCardPower: 0
        })
    }

    handleGetPower = (hitterCardId, hitterCardPower) => {
        this.setState({ hitterCardId: hitterCardId, hitterCardPower: hitterCardPower})
    }

    render() {
        const playerRenderer = (playerNumber) => {
            console.log(playerNumber)
            return (
                <div>
                    {
                        this.props[`player${playerNumber}Cards`].map(card =>
                            <Card
                                key={card.id}
                                character={card}
                                hasAnyCardBeenSelected = {this.state.hitterCardId !== null}
                                isSelected={card.id === this.state.hitterCardId}
                                onHitCard={() => this.handleHit(this.props.isFirstPlayer, card.id, this.state.hitterCardPower)}
                                onGetPower={() => this.handleGetPower(card.id, card.power)}
                                isHisTurn={(this.props.isFirstPlayer && playerNumber === 1) || (!this.props.isFirstPlayer && playerNumber === 2)}
                            />
                        )
                    }
                </div>
            )
        }

        return (
            <div>
                <div className="boards">
                    { playerRenderer(1) }
                    { playerRenderer(2) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFirstPlayer: state.turn.isFirstPlayer,
        player1Cards: state.board.player1.cards,
        player2Cards: state.board.player2.cards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPassTurn: () => dispatch( changeTurn() ),
        onHitCard: (isFirstPlayer, id, damage) => dispatch ( hitCard(isFirstPlayer, id, damage) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
