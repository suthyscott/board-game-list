import "./App.css"
import Header from "./components/Header/Header"
import BoardGamesDisplay from "./components/BoardGamesDisplay/BoardGamesDisplay"
import Wishlist from "./components/Wishlist/Wishlist"
import axios from 'axios'
import { useState, useEffect } from "react"

function App() {
    const [boardGames, setBoardGames] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(()=>{
        axios.get(`https://api.boardgameatlas.com/api/search?category=adventure&client_id=${process.env.REACT_APP_API_KEY}`)
        .then(res => setBoardGames(res.data.games))
    },[])

    // function to add game to wishlist array
    const addToWishlist = game => {
        const index = boardGames.findIndex(gameObj => gameObj.id === game.id)
        boardGames.splice(index, 1)
        setBoardGames([...boardGames])
        game.index = index
        setWishlist(currentWishlist => [...currentWishlist, game])
    }

    const removeFromWishlist = id => {
        const index = wishlist.findIndex(game => game.id === id)

        boardGames.splice(wishlist[index].index, 0, wishlist[index])
        setBoardGames([...boardGames])

        wishlist.splice(index, 1)
        setWishlist([...wishlist])
    }

    const searchForGame = searchValue => {
        axios.get(`https://api.boardgameatlas.com/api/search?client_id=7su0wzJYcy&name=${searchValue}`)
            .then(res => setBoardGames(res.data.games))
    }

    return (
        <div className="App">
            <Header />
            <div id="main-container">
                <BoardGamesDisplay boardGames={boardGames} addToWishlist={addToWishlist} searchForGame={searchForGame}/>
                <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist}/>
            </div>
        </div>
    )
}

export default App
