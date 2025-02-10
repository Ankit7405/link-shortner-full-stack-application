import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import Footer from "./Components/Footer";
import ShortenUrlPage from "./Components/ShortenUrlPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./Components/ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute> } />
        <Route path="/login" element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
        <Route path="/error" element={<ErrorPage />}/>
        <Route path="*" element={<ErrorPage message="We can't semm to find the page you are looking for"/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<ShortenUrlPage/>}/>
        </Routes>
    )
}
