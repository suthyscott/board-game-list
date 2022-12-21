import React from 'react'
import './GameCard.css'

const GameCard = ({gameInfo, addToWishlist}) => {
  // console.log(gameInfo)
  return (
    <div className='game-card-container'>
      <h2> {gameInfo.name} </h2>
      <img src={gameInfo.image_url}/>
      <p>{gameInfo.description_preview}</p>
      <p>This game is for {gameInfo.players} players</p>
      {/* button to add to wishlist */}
      <button onClick={() => addToWishlist(gameInfo)}>Add to Wishlist</button>
    </div>
  )
}

export default GameCard