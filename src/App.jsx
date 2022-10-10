import "./App.css"
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import HeaderCarousel from './components/HeaderCarousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route path='/' element={<HeaderCarousel/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
