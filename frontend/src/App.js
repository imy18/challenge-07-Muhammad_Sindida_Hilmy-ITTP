// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cars from "./components/cars";
import Dashboard from "./components/dashboard";
// import Login from "./components/login";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>

        <Route path="/cars">
          <Cars/>
        </Route>
    
      </Switch>
    </BrowserRouter>
  );
}

export default App;