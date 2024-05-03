import React from 'react'
import GameBoard from '../../Components/GameBoard/GameBoard'
import "./Game.css"

const Game:React.FC = () => {
  return (
    <>
    <div className='game-parent'>
        <GameBoard/>
    </div>
    </>
  )
}

export default Game