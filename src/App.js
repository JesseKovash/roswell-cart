import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {

  return (
    <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
