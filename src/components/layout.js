import React from "react"
import styled from "styled-components"

import Landing from "./landing"
import Projects from "./projects"
import Timeline from "./timeline"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
`

const Footer = styled.footer`
  padding-top: 20px;
  text-align: center;
`

export default () => (
  <div>
    <Container>
      <Landing />
    </Container>
    <Container>
      <Projects />
    </Container>
    <Container>
      <Timeline />
    </Container>
    <Footer>
      Built with {` `} <a href="https://www.gatsbyjs.org"> Gatsby </a> {` `}©
      {new Date().getFullYear()}
    </Footer>
  </div>
)
