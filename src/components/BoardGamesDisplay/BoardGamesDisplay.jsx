import React from "react"
import "./BoardGamesDisplay.css"
import GameCard from "../GameCard/GameCard"

const BoardGamesDisplay = ({ boardGames, addToWishlist }) => {
    console.log(boardGames)
    return (
        <main id="board-games-display-container">
            {boardGames.map((game, index) => {
                return <GameCard gameInfo={game} addToWishlist={addToWishlist}/>
            })}
        </main>
    )
}

export default BoardGamesDisplay
