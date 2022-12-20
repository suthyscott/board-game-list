import "./App.css"
import Header from "./components/Header/Header"
import BoardGamesDisplay from "./components/BoardGamesDisplay/BoardGamesDisplay"
import Wishlist from "./components/Wishlist/Wishlist"
import axios from 'axios'
import { useState, useEffect } from "react"

function App() {
    const [boardGames, setBoardGames] = useState([])

    useEffect(()=>{
        // console.log('this is in the useEffect')
        axios.get('https://api.boardgameatlas.com/api/search?category=adventure&client_id=WEWILLADDTHISTONIGHT')
        .then(res => setBoardGames(res.data.games))
    },[])


    // console.log(boardGames)
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
