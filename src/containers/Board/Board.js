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

    handleHit = (playerTurn, id, damage) => {
        this.props.onHitCard(playerTurn, id, damage)
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
            return (
                <div>
                    {
                        this.props.board[`player${playerNumber}`].cards.map(card =>
                            <Card
                                key={card.id}
                                character={card}
                                hasAnyCardBeenSelected = {this.state.hitterCardId !== null}
                                isSelected={card.id === this.state.hitterCardId}
                                onHitCard={() => this.handleHit(this.props.playerTurn, card.id, this.state.hitterCardPower)}
                                onGetPower={() => this.handleGetPower(card.id, card.power)}
                                isHisTurn={this.props.playerTurn === playerNumber}
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
        playerTurn: state.turn.playerTurn,
        board: state.board,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPassTurn: () => dispatch( changeTurn() ),
        onHitCard: (playerTurn, id, damage) => dispatch ( hitCard(playerTurn, id, damage) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
