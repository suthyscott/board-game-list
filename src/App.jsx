import "./App.css"
import Header from "./components/Header/Header"
import BoardGamesDisplay from "./components/BoardGamesDisplay/BoardGamesDisplay"
import Wishlist from "./components/Wishlist/Wishlist"
import axios from 'axios'
import { useState, useEffect } from "react"

function App() {
    const [boardGames, setBoardGames] = useState([])

    useEffect(()=>{
        axios.get(`https://api.boardgameatlas.com/api/search?category=adventure&client_id=${process.env.REACT_APP_API_KEY}`)
        .then(res => setBoardGames(res.data.games))
    },[])

    console.log(process.env)

    return (
        <div className="App">
            <Header />
            <div id="main-container">
                <BoardGamesDisplay boardGames={boardGames}/>
                <Wishlist />
            </div>
        </div>
    )
}

export default App
