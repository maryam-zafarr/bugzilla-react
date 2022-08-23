import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BugDetails from '../components/BugDetails'
import Navbar from '../components/Navbar'

const Container = styled.div`
  margin: 50px 150px;
`

const BugShow = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const bugId = location.pathname.split('/')[4]
  const [bugDetail, setBugDetail] = useState([])

  useEffect(() => {
    const getBugDetail = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/projects/' + id + '/bugs/' + bugId
        )
        setBugDetail(res.data)
      } catch (err) {}
    }

    getBugDetail()
  })

  return (
  <div>
    <Navbar />
    <Container>
      <h4>{bugDetail.title}</h4>
      <BugDetails
        description = {bugDetail.description}
        bug_type = {bugDetail.bug_type}
        status = {bugDetail.status}
        assignee = {bugDetail.assignee}
        reporter = {bugDetail.reporter}
        deadline = {bugDetail.deadline}
      />
      <Link to={`/projects/${id}/bugs`} className='btn btn-outline-dark'>Back</Link> &nbsp;
    </Container>
  </div>
  )
}

export default BugShow
