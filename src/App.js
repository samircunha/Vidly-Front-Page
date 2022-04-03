import "./App.css";
import React from "react";
import background from "./assets/background-init.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Header } from "./components/Header";
import { FirstPage } from "./FirstPage";
// import { Logging } from "./Logging";
// import { Register } from "./Register";

function App() {
  return (
    <Typography classList='container' sx={{ backgroundImage: `url(${background})`}}>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          {/* <Route path='/Logging' component={Logging}></Route> */}
          {/* <Route path='/Register' component={Register}></Route> */}
        </Routes>
      </Router>
    </Typography>
  );
}

export default App;
