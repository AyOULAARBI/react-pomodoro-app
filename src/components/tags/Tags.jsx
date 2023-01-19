import styled,{ css }  from "styled-components";
import { useState } from "react";



function Tags({tags}) {
  const [activeBtn,setActive] = useState()
  return (
    <TagsContainer>
        {tags.map((tag,index)=>
        <Tag  color="cyan" isActive={activeBtn ===index} key={index} onClick={()=>setActive(index)}>{tag.type}</Tag>)}
    </TagsContainer>
  )
}

export default Tags;
const TagsContainer = styled.div`
background-color: ${(props)=> props.theme.colors.secondary};
height:3.5rem;
width:45%;
margin:0 auto;
border-radius:1rem;
display:flex;
justify-content:space-between;
align-items:center;
`
const Tag = styled.button`
 all:unset;
  color:white;
  font-weight:bolder;
  width:26%;
  margin:auto 3px;
  padding:5px 12px;
  text-align:center;
  font-size:1.5rem;
  border:none;
  border-radius:1rem;
  ${({isActive,color})=> 
  isActive && css`
   background-color: ${props=>props.theme.colors.primary};
   color:${color};
  `
}
}
`