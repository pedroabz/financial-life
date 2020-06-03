import styled from "styled-components"
import {white} from "../../styles/colors"
import {rem} from "../../styles/tools"


export const StyledWrapper = styled.div`
    background: ${white};    
    padding: ${rem(16)} 0;
    margin: 0
` 


export const StyledDiv = styled.div`
    height: 20px;
    width:20px;
    margin-top: -12px;
    margin-left: 5px;
`

export const Container = styled.div`
border: solid 0.0625rem #d1d2d4;
background: #f7f8f0;
padding:1.25rem;
width:60%;
margin:auto;
display:flex;
flex-direction: column;
`