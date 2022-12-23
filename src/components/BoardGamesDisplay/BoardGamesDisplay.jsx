import React from "react"
import "./BoardGamesDisplay.css"
import GameCard from "../GameCard/GameCard"
import { useState } from "react"

const BoardGamesDisplay = ({ boardGames, addToWishlist, searchForGame }) => {
    const [searchValue, setSearchValue] = useState("")

    return (
        <main id="board-games-display-container">
            <div className="search-container">
                <input
                    placeholder="search by name"
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button onClick={() => searchForGame(searchValue)}>
                    Search
                </button>
            </div>
            <div className="game-cards-container">
                {boardGames.map((game, index) => {
                    return (
                        <GameCard
                            gameInfo={game}
                            addToWishlist={addToWishlist}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default BoardGamesDisplay
