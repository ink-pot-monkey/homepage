import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFreeCodeCamp,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Title = styled.h1`
  font-size: ${rhythm(2.4)};
`

const Justification = styled.h4`
  font-size: ${rhythm(0.7)};
  margin-top: ${rhythm(-0.5)};
`

const Tagline = styled.h2`
  font-size: ${rhythm(1)};
  margin: ${rhythm(0.5)};
`

const Icon = styled.a`
  font-size: ${rhythm(1.5)};
  padding: ${rhythm(0.2)};
  color: blue;
`

export default () => (
  <div>
    <Particles
      params={{
        particles: {
          color: {
            value: "#00F",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00F",
            opacity: 0.4,
            width: 1,
          },
        },
      }}
      style={{
        position: "absolute",
        display: "block",
        top: "0",
        left: "0",
        "z-index": "-99",
      }}
    />

    <Title>Thomas Sean Dominic Kelly</Title>

    <Justification>
      (Because there's just too many Thomas Kelly's in the world)
    </Justification>

    <Tagline>
      Academic Technologist | Code Convert | Fullstacker | Linux Diver
    </Tagline>

    <div>
      <Icon
        target="_blank"
        href="https://www.freecodecamp.org/thomasseandominickelly"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </Icon>
      <Icon
        target="_blank"
        href="https://stackoverflow.com/story/thomasseandominickelly"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </Icon>
      <Icon
        target="_blank"
        href="https://www.linkedin.com/in/thomasseandominickelly"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Icon>
      <Icon target="_blank" href="https://github.com/thomasseandominickelly">
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
    </div>
    <a href="https://www.codewars.com/users/tsdkelly">
      <img
        src="https://www.codewars.com/users/tsdkelly/badges/small"
        alt="Codewars stats"
      />
    </a>
  </div>
)
