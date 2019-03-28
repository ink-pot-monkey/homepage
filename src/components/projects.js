import React from "react"
import projects from "../data/projects.json"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "./bulma.css"

const Section = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`

const Icon = styled.a`
  font-size: ${rhythm(1.5)};
  padding: ${rhythm(0.2)};
`

const Footer = styled.footer`
  display: inline-block;
`

export default () => (
  <Section>
    <h2 className="title is-spaced">Projects</h2>
    <div className="columns is-multiline is-mobile is-centered">
      {projects.map(project => {
        return (
          <div className="column is-one-third">
            <div className="card">
              <a
                href={project.url}
                key={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card-header">
                  <p class="card-header-title is-centered">{project.name}</p>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>{project.description}</p>
                    <p>{project.type}</p>
                  </div>
                </div>
              </a>
              <Footer class="card-footer">
                <Icon target="_blank" href={project.git}>
                  <FontAwesomeIcon icon={faGithub} />
                </Icon>
              </Footer>
            </div>
          </div>
        )
      })}
    </div>
  </Section>
)
