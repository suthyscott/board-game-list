import React from 'react'
import './GameCard.css'

const GameCard = ({gameInfo, addToWishlist, removeFromWishlist}) => {
  return (
    <div className='game-card-container'>
      <h2> {gameInfo.name} </h2>
      <img src={gameInfo.image_url}/>
      <p>{gameInfo.description_preview}</p>
      <p>This game is for {gameInfo.players} players</p>
      {/* button to add to wishlist */}
      {addToWishlist ? (
        <button onClick={() => addToWishlist(gameInfo)}>Add to Wishlist</button>
      )
    :
    (
      <button onClick={() => removeFromWishlist(gameInfo.id)}>Remove From Wishlist</button>
    )}
    </div>
  )
}

export default GameCard