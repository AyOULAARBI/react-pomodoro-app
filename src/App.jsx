// import { Routes,Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Pomodor from "./components/Pomodor";
import Settings from "./components/Settings";
import './App.css'

function App() {
  let periods = [
    {type:"sprint",minutes:25},
    {type:"short break",minutes:5},
    {type:"long break",minutes:15},
  ]
  const [period,setPeriod] = useState(periods)
  const elements = useRoutes([
    {path:"/", element:<Home/>},
    {path:"/pomodoro" ,element:<Pomodor periods={period}/>},
    {path:"/settings" ,element:<Settings setMax={setPeriod} />}
  ])

  return (elements
  )
}

export default App
