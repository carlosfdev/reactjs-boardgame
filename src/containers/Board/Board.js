import React, {Component} from 'react'

import './Board.css';

import {connect} from 'react-redux'

import { changeTurn, hitCard } from '../../store/actions/actions'

import Card from '../../components/Card/Card'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleHit = (isFirstPlayer, id, damage) => {
        this.props.onPassTurn()
        this.props.onHitCard(isFirstPlayer, id, damage)
    }

    render() {
        const { player1Cards, player2Cards } = this.props
        const player1Renderer = <div>
            {
                player1Cards.map(card =>
                    <Card
                        key={card.id}
                        character={card}
                        onHitCard={() => this.handleHit(this.props.isFirstPlayer, card.id, 20)}
                        isHisTurn={this.props.isFirstPlayer}
                    />
                )
            }

        </div>
        const player2Renderer = <div>
            {
                player2Cards.map(card =>
                    <Card
                        key={card.id}
                        character={card}
                        onHitCard={() => this.handleHit(this.props.isFirstPlayer, card.id, 20)}
                        isHisTurn={!this.props.isFirstPlayer}
                    />
                )
            }

        </div>

        return (
            <div>
                <div className="boards">
                    { player1Renderer }
                    { player2Renderer }
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
