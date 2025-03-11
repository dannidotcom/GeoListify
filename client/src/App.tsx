import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Login from "./page/Login"
import Register from "./page/Register"
import Explore from "./page/Explore"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  )
}

export default App

