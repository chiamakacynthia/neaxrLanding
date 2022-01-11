import React from 'react'
import img from "../asset/progimg.png"
import styled from "styled-components"
import {BsGraphUp} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import {GrCertificate, GrMoney} from "react-icons/gr"
import {GiNotebook} from "react-icons/gi"

const Landing = () => {
    return (
        <Container>
          <Top>
          <Wrapper>
        <One>WE ARE HERE FOR</One>
        <Second>Giving Future to your Investment</Second>
        <Third>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</Third>
            <Button>Learn More</Button>
            </Wrapper>
            <Image src={img}/>
          </Top>
          <Cards>
              <Card>
                  <Sub>
                  <Hold>
                  <Icon/>
                  </Hold>
                  <Text>Best Financial Advice</Text>
                  <Tex>Read more<Icon1/></Tex>
                  </Sub>
              </Card>
              <Card>
                  <Sub>
                  <Hold1>
                  <Icon2/>
                  </Hold1>
                  <Text>Best Financial Advice</Text>
                  <Tex>Read more<Icon1/></Tex>
                  </Sub>
              </Card>
              <Card>
                  <Sub>
                  <Hold2>
                  <Icon3/>
                  </Hold2>
                  <Text>Best Financial Advice</Text>
                  <Tex>Read more<Icon1/></Tex>
                  </Sub>
              </Card>
              <Card>
                  <Sub>
                  <Hold3>
                  <Icon4/>
                  </Hold3>
                  <Text>Best Financial Advice</Text>
                  <Tex>Read more<Icon1/></Tex>
                  </Sub>
              </Card>
          </Cards>
        </Container>
    )
}

export default Landing

const Container = styled.div`
width: 100vw;
height: 80vh;
justify-content: space-around;
display: flex;
/* align-items: center; */
padding-top: 20px;
flex-direction: column;
`
const Wrapper = styled.div`
width: 29%;
height: 250px;
display: flex;
justify-content: space-around;
flex-direction: column;
margin-left: 200px;
`
const Image = styled.img`
width: 50%;
height: 400px;
object-fit: contain;
`
const One = styled.div`
   font-size:14px;
    font-family: poppins;
    font-weight:bold;
    color:#3BC1B2;
`
const Second = styled.div`
 font-size:40px;
    font-family: poppins;
    font-weight:bold;
    color:black;
`
const Third = styled.div`
 font-size:13px;
    font-family: poppins;
    font-weight:400px;
    color:gray;
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
    margin-top: 20px;
height: 30px;
`
const Top = styled.div`
width: 100vw;
height: 500px;
display: flex;
align-items: center;
`
const Cards = styled.div`
width: 60vw;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
/* background-color:red; */
margin-left: 200px;
`
const Card = styled.div`
width: 170px;
height: 160px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
text-align: left;
margin: 10px;
`
const Icon2 = styled(GrCertificate)`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
`
const Icon3 = styled(GiNotebook)`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
`
const Icon4 = styled(GrMoney)`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
`
const Icon = styled(BsGraphUp)`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
`
const Icon1 = styled(AiOutlineArrowRight)`
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
margin-left:5px;
color: black;
`
const Text = styled.div`
 font-size:15px;
    font-family: poppins;
    font-weight:bold;
    color:black;
    width: 120px;
`
const Tex = styled.div`
 font-size:12px;
    font-family: poppins;
    font-weight:400px;
    color:gray;
    width: 120px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Hold1 = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background-color:orange;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
`
const Hold2 = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background-color:skyblue;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
`
const Hold3 = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background-color:purple;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
`
const Hold = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background-color:red;
opacity: 0.3;
display: flex;
justify-content: center;
align-items: center;
`
const Sub = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
height: 130px;
`