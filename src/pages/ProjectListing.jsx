import React from 'react'
import styled from 'styled-components'
import Projects from '../components/Projects'

const Container = styled.div`
  margin: 50px 150px;
`
const Title = styled.h1`
  font-size: 2.5rem;
`

const ProjectListing = () => (
    <div>
      <Container>
        <Title>Projects</Title>
        <Projects />
      </Container>
    </div>
)

export default ProjectListing
