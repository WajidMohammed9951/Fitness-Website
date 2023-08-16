import React from "react";

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ExcerciseDetail from "./Pages/ExcerciseDetail";
import Home from "./Pages/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExcerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
  );
}

export default App;
