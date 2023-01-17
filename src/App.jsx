import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Pomodor from "./components/Pomodor";
import Settings from "./components/Settings";


function App() {

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/pomodoro" element={<Pomodor/>} />
    <Route path="/settings" element={<Settings/>} />
    </Routes>
  )
}

export default App
