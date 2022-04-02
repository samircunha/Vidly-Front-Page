import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { Header } from "./components/Header";
// import { FirstPage } from "./FirstPage";
// import { Logging } from "./Logging";
// import { Register } from "./Register";
import { Body } from "./Body";
import { Footer } from "./Footer";

function App() {
  const styles = {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    // <Box className="App" component="div" sx={styles}>
    <>
      <Header />
      <Router>
        <Switch>
          {/* <Route exact path='/' component={FirstPage}></Route> */}
          {/* <Route path='/Logging' component={Logging}></Route> */}
          {/* <Route path='/Register' component={Register}></Route> */}
        </Switch>
      </Router>
    </>
    // </Box>
  );
}

export default App;
