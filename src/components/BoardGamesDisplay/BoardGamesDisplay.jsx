import React from 'react'
import './BoardGamesDisplay.css'
import GameCard from '../GameCard/GameCard'

const BoardGamesDisplay = ({boardGames}) => {
  console.log(boardGames)
  return (
    <main id='board-games-display-container'>

      {boardGames.map((game, index)=>{
        return <GameCard gameInfo={game} />
      })}

      </main>
  )
}

export default BoardGamesDisplay