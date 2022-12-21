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
        console.log(game)
        setWishlist(currentWishlist => [...currentWishlist, game])
    }

    const removeFromWishlist = id => {
        const index = wishlist.findIndex(game => game.id = id)
        wishlist.splice(index, 1)
        setWishlist([...wishlist])
    }

    console.log(wishlist)

    return (
        <div className="App">
            <Header />
            <div id="main-container">
                <BoardGamesDisplay boardGames={boardGames} addToWishlist={addToWishlist}/>
                <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist}/>
            </div>
        </div>
    )
}

export default App
