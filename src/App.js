import "./App.css";
import React from "react";
import { useLogged } from "./context/Logged";
import { Browse } from "./pages/Browse";
import { Init } from "./pages/Init";

function App() {
  // const { logged } = useLogged();
  // return logged ? (<Browse></Browse>) : (<Init></Init>);
  return <Browse></Browse>
}

export default App;
