import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
