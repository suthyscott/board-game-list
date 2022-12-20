import React from 'react'
import './BoardGamesDisplay.css'

const BoardGamesDisplay = ({boardGames}) => {
  console.log(boardGames)
  return (
    <main id='board-games-display-container'>
      BoardGamesDisplay
      {boardGames.map((game, index)=>{
        return <div>{game.name}</div>
      })}
      </main>
  )
}

export default BoardGamesDisplay