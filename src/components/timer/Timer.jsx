import styled from "styled-components"
import Clock from "./Clock"
import { useState } from "react"


function Timer() {
  const [curr,setCurr] = useState(100);
  return (
    <TimerContainer>
        <OuterCerc percentage={curr}>
            <InnerCerc>
                <Clock setPercentage={setCurr}/>
            </InnerCerc>
        </OuterCerc>
  

    </TimerContainer>
  )
}

export default Timer

const TimerContainer = styled.div`
background:conic-gradient(
    ${(props)=> props.theme.colors.secondary},
    ${(props)=> props.theme.colors.bg} 150deg,
    ${(props)=> props.theme.colors.secondary});
);
color: ${(props)=> props.theme.colors.primary};
width:22rem;
height:22rem;
margin:0 auto;
margin-top:3rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
box-shadow: -50px -50px -150px rgba(158, 158, 158, 0.2),-50px -10px -100px rgba(0,0,0, 0.5);
`

const OuterCerc = styled.div`
background: conic-gradient(${(props)=> props.theme.colors.primary} ${({percentage})=>percentage}%, transparent 10%);
width:19rem;
height:19rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
`
const InnerCerc = styled.div`
background:${(props)=> props.theme.colors.secondary};
width:18rem;
height:18rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
`
