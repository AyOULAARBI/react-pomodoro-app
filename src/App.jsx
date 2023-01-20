import Pomodoro from "./components/Pomodoro";
import StateProvider from "./components/StateProvider";


 const App =()=>{
  return(
    <>
    <StateProvider>
      <Pomodoro/>
    </StateProvider>
    
    </>
  )
}
export default App;