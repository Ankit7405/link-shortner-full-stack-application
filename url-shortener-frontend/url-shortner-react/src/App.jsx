import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import DashboardLayout from './Components/Dashboard/DashboardLayout';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardLayout/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
