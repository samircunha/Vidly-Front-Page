import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Header } from "./components/Header";
import { FirstPage } from "./pages/FirstPage";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";

function App() {
  return (
    <Typography>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          <Route path='/LogIn' element={<LogIn/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
        </Routes>
      </Router>
    </Typography>
  );
}

export default App;
