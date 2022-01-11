import React from 'react'
import Header from './component/Header'
import styled from "styled-components"
import Landing from './component/Landing'

const App = () => {
  return (
    <Container>
 <Header/>
 <Landing/>
    </Container>
  )
}

export default App

const Container = styled.div`
width: 100vw;
height: 100vh;
  background: linear-gradient(#AED8FE, #D2E8FF);
`