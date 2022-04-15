import "./App.css";
import axios from "axios";
import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Header } from "./components/Header";
import { FirstPage } from "./pages/FirstPage";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";
import { Ok } from "./pages/Ok";

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
    .then(res => console.log(res))
    .catch(ex => console.log(ex))
  });
  return (
    <Typography>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/Login" element={<LogIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/OK" element={<Ok />}></Route>
        </Routes>
      </Router>
    </Typography>
  );
}

export default App;
