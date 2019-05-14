import React, { Component } from "react"
import "./bulma.css"
import styled from "styled-components"

import timeline from "../data/timeline.json"

const Center = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 0px;
  padding-bottom: 0;
`

const Form = styled.form`
  padding-left: 20px;
  display: flex;
  margin: 0;
`

const Button = styled.button`
  margin-left: 10px;
`

const Role = styled.h3`
  font-weight: bold;
`

const Where = styled.h4`
  text-decoration: underline;
`

const Description = styled.p`
  font-weight: 100;
`

class Timeline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timelineType: "everything",
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      timelineType: event.target.value,
    })
  }

  render() {
    let timelineDisplay = {}
    if (this.state.timelineType !== "everything") {
      timelineDisplay = timeline.filter(type => {
        return type.type === this.state.timelineType
      })
    } else timelineDisplay = timeline

    return (
      <div className="timeline is-centered">
        <h2 className="title is-spaced">Interactive Timeline</h2>
        <p>Click on a category to see the timeline change</p>
        <header className="timeline-header">
          <Form>
            <Button
              value="work"
              onClick={this.handleClick}
              className="button is-primary is-inverted"
              type="submit"
            >
              Work
            </Button>
            <Button
              value="everything"
              onClick={this.handleClick}
              className="button is-primary is-inverted"
              type="submit"
            >
              Everything
            </Button>
            <Button
              value="education"
              onClick={this.handleClick}
              className="button is-primary is-inverted"
              type="submit"
            >
              Education
            </Button>
          </Form>
        </header>
        {timelineDisplay.map(experience => (
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary" />
            <div className="timeline-content">
              <Center>
                <p className="heading">{experience.duration}</p>
                <Role>{experience.role}</Role>
                <Where>{experience.where}</Where>
                <Description>{experience.description}</Description>
              </Center>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Timeline
