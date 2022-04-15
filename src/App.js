import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Header } from "./components/Header";
import { FirstPage } from "./pages/FirstPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Ok } from "./pages/Ok";

function App() {
  return (
    <Typography>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/OK" element={<Ok />}></Route>
        </Routes>
      </Router>
    </Typography>
  );
}

export default App;
