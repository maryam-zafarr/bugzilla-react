import React from 'react'
import Bugs from '../components/Bugs'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Link, useLocation } from 'react-router-dom'

const Container = styled.div`
  margin: 50px 150px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-size: 2.5rem;
`

const BugListing = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  return (
    <>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>Bugs</Title>
        <Link to={`/projects/${id}/bugs/new`} className='btn btn-warning'>Add Bug</Link>
      </Wrapper>
      <Bugs />
      <Link to={`/projects/${id}`} className='btn btn-outline-dark'>Back</Link>
    </Container>
  </>
  )
}

export default BugListing
