import './App.css'
import Game from './Pages/Game/Game'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Menu } from './Pages/Menu/Menu'


function App() {
 
  return (
    <>
    <div className='app-main'>
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/Game' element={<Game/>}/>
      {/* <Game/> */}
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
