import "./App.css"
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from "./pages/Index"

function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
