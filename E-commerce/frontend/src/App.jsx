import HomePage from './pages/HomePage'
import Login from './pages/Login'
// import './App.css'
import {Route,Routes} from "react-router-dom"
function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      
    </>
  )
}

export default App
