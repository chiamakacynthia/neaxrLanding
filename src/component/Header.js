import React from 'react'
import styled from "styled-components"
import img from "../asset/proglogo.JPG"

const Header = () => {
    return (
        <Container>
              <Logo src={img}/>  
            <Wrapper>
              <span>Home</span>
              <span>Goal</span>
              <span>Career</span>
              <span>Case Study</span>
              <span>Quotes</span>
              <span>Blog</span>
              <span>About</span>
              <span>FAQ</span>
            </Wrapper>
            <Button>Contact Us</Button>
        </Container>
    )
}

export default Header

const Container = styled.div`
width: 100vw;
height: 60px;
justify-content: space-around;
display: flex;
align-items: center;
`
const Logo = styled.img`
width: 100px;
height: 40px;
object-fit: contain;
`
const Wrapper = styled.div`
width: 55%;
height: 100%;
justify-content: space-between;
display: flex;
align-items: center;

span{
    font-size:13px;
    font-family: poppins;
    font-weight:300px;
    color:black;
}
`
const Button = styled.button`
background-color:#6CE79D;
font-size:13px;
    font-family: poppins;
    font-weight:300px;
    color:white;
    border-radius:3px;
    border: none;
    outline: none;
    width: 100px;
height: 30px;
`
