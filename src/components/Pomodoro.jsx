import styled from "styled-components";
import Tags from "./tags/Tags";
import Timer from "./timer/Timer";
import {useContext } from "react";
import { StateContext } from "./StateProvider";



function Pomodoro() {
      const {fields,current,setCurrent} = useContext(StateContext)
  return (
    <Container>
     <Title>Pomodoro</Title>
     <Tags/>
     <Timer/>
    </Container>
  )
}


export default Pomodoro;

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
flex-direction:column;
`

const Title = styled.h1`
 text-align:center;
 color:white;
`
const Btn = styled.button`
all:unset;
margin-top:2rem;
color: ${props=>props.theme.colors.primary};
width:3rem;
`