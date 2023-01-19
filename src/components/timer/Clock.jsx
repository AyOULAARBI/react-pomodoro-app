import styled from "styled-components"

function Clock() {
  return (
    <ClockContainer>
        <TimerText>
            25:00
        </TimerText>
        <BtnsContainer>
        <Btn><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg></Btn>
<Btn>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</Btn>


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