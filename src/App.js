import './App.css'
import Game from './components/Game'
import Search from './components/Search'
import Home from './components/Home'

function App() {
  return (
    <>
      <div className="container-content">
        <Search />
        <Game />
      </div>
    </>
  )
}

export default App
