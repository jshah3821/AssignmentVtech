import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Component/Menubar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useState } from "react";
import GridExample from "./Component/Foot";

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Menubar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        <Routes>
          {isLoggedIn ? (
            <Route exact path="/" element={<Home />}></Route>
          ) : (
            <Route exact path="/" element={<Navigate to="/login" />}></Route>
          )}

          <Route
            exact
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            }
          ></Route>
        </Routes>
        <GridExample />
      </div>
    </Router>
  );
}
