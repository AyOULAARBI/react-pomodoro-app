import { Routes,Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Pomodor from "./components/Pomodor";
import Settings from "./components/Settings";


function App() {
  const elements = useRoutes([
    {path:"/", element:<Home/>},
    {path:"/pomodoro" ,element:<Pomodor/>},
    {path:"/settings" ,element:<Settings/>}
  ])

  return (elements
  )
}

export default App
