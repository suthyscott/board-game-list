import React from 'react'

const GameCard = ({gameInfo}) => {
  console.log(gameInfo)
  return (
    <div>
      {gameInfo.name}
      <p>This game is for {gameInfo.players} players</p>
    </div>
  )
}

export default GameCard