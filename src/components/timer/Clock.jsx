import {useState,useEffect, useContext} from 'react';
import styled from "styled-components"
import { StateContext } from '../StateProvider';

function Clock() {

    const {isActive,setStatus,time,setTime,setPercentage,current,fields} = useContext(StateContext);
    useEffect(()=>{
        if((time>0) && isActive){
        let interv = setInterval(()=>{
            setTime(time=> time-1)
            setPercentage(()=>(time*100)/(current.minutes*60))
        },1000)
        return ()=>clearInterval(interv);
    }
    },[time,isActive])
  return (
    <ClockContainer>
        <TimerText>
            {Math.floor(time/60) <10? `0${Math.floor(time/60)}`:Math.floor(time/60)}:{time%60<10?`0${time%60}`:time%60}
        </TimerText>
        <BtnsContainer>
        {!isActive ? <Btn onClick={()=>{setStatus(true);console.log('I am clicked')}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg></Btn> :
<Btn onClick={()=>setStatus(false)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</Btn>
}


        </BtnsContainer>
        

    </ClockContainer>
    
  )
}

export default Clock

const ClockContainer = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 height:100%;
 flex-direction:column;
 `
const TimerText = styled.h2`
color: ${props=>props.theme.colors.primary};
font-size:4rem;
`
const BtnsContainer = styled.div`
  display:flex;
`
const Btn = styled.button`
all:unset;

color: ${props=>props.theme.colors.primary};
width:3rem;
`