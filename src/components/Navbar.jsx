import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #E0E0E0;
`
const Item = styled.div`
  margin: 20px;
  padding-right: 10px;
`
const Title = styled.div`
  margin-right: auto;
  font-size: 20px;
`

const Navbar = () => (
    <Container>
      <Title><Item>B U G Z I L L A</Item></Title>
      <Item>Hi User!</Item>
      <Item><Link to='/projects' className='nav-link'>Projects</Link></Item>
    </Container>
)

export default Navbar
