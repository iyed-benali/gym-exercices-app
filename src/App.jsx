import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material'
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx"
import ExerciceDetails from "./components/ExerciceDetails";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Box width="400px" sx={{width:{xl:"1488px"}}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciceDetails />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
} 

export default App;
