import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Bmi from './pages/Bmi';

const App = () => {
  return (
    <>
    <Box width="400px" sx={{width: { xl: '1488px'}}} m="auto">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail/>} />
        <Route path="/bmicalculator" element={<Bmi/>} />
    </Routes>
    </Box>
    <Footer/>
    </>
  )
}

export default App