import React,{createContext,useState,useEffect} from 'react'

export const StateContext = createContext()

function StateProvider({children}) {
    let periods = [
        {type:"sprint",minutes:25},
        {type:"short break",minutes:5},
        {type:"long break",minutes:15},
    ];
    const [fields,setFeild] = useState([...periods])
    const [isActive,setStatus] = useState(false)
    const [activeBtn,setActive] = useState(0)
      const [current,setCurrent] = useState(fields[activeBtn]);
      const [percentage,setPercentage] = useState(100);
      const [time,setTime] = useState(current.minutes*60);
      console.log(fields)
      useEffect(()=>{
        switch(activeBtn){
            case 0:
                setTime(fields[0].minutes * 60);
                break;
            case 1:
                setTime(fields[1].minutes * 60);
                break;
            case 2:
                setTime(fields[2].minutes * 60);
                break;
        }
      },[activeBtn]);
  return (
    <StateContext.Provider value={{fields,setFeild,periods,current,setCurrent,percentage,setPercentage,time,setTime,isActive,setStatus,activeBtn,setActive}}>
        {children}
    </StateContext.Provider>
  )
}

export default StateProvider