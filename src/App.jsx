
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pnf from './pages/Pnf'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenContext } from './contexts/TokenAuth'

function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Auth/>}/>
      <Route path='/register'element={<Auth insideRegister={true}/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/projects'element={<Projects/>}/>
      <Route path='/*'element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
