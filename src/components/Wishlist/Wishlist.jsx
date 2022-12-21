import React from 'react'
import './Wishlist.css'
import GameCard from '../GameCard/GameCard'

const Wishlist = ({wishlist, removeFromWishlist}) => {
  return (
    <section id='wishlist-container'>
      {
        wishlist.map((game) => {
          return <GameCard gameInfo={game} removeFromWishlist={removeFromWishlist}/>
        })
      }
    </section>
  )
}

export default Wishlist