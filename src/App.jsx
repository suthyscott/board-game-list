import "./App.css"
import Header from "./components/Header/Header"
import BoardGamesDisplay from "./components/BoardGamesDisplay/BoardGamesDisplay"
import Wishlist from "./components/Wishlist/Wishlist"

function App() {
    return (
        <div className="App">
            <Header />
            <div id="main-container">
                <BoardGamesDisplay />
                <Wishlist />
            </div>
        </div>
    )
}

export default App
