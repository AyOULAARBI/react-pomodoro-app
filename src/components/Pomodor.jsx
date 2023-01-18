import React,{ useState,useEffect } from "react";

function Pomodor({periods}) {
  const [current,setCurrent] = useState('sprint')
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);
  let curr = periods.find(elm=>elm.type===current);  
    console.log(curr)
  var timer;
  const startTimer = () => {
    timer = setInterval(() => {
        if(minutes != curr.minutes){
          setSeconds(seconds+1);
            if(seconds ===59){
              setMinutes(minutes+1)
              setSeconds(0)
            }
      }else{
        clearInterval(timer)
      }
      }, 1000);
      
    };
    const stopTimer = ()=>{
      clearInterval(timer)
    }
    return(<div className="container">
        <span>
          <button onClick={()=>setCurrent('sprint')}>sprint</button>
          <button onClick={()=>setCurrent('short break')}>short break</button>
          <button onClick={()=>setCurrent('long break')}>long break</button>
        </span>
        <div>
        <h1>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</h1>
        {curr.minutes && <h2>timer is set to : {curr.minutes} minutes</h2>}
        </div>
        <span>
        <button onClick={()=>startTimer()}>Start</button>
        <button onClick={()=>stopTimer()}>Stop</button>
        </span>
        </div>
  )
}

export default Pomodor