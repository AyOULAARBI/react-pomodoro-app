import { useEffect } from "react";
import { useState } from "react";

function Pomodor() {
  const [max,setMax] = useState(5)
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);
  var timer;
    useEffect(() => {
      timer = setInterval(() => {
        if(minutes != max){
          setSeconds(seconds+1);
            if(seconds ===59){
              setMinutes(minutes+1)
              setSeconds(0)
            }
      }else{
        clearInterval(timer)
      }
      }, 1000);
      return ()=>clearInterval(timer)
    });
  
    return(<div className="container">
        <h1>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</h1>
        </div>
  )
}

export default Pomodor