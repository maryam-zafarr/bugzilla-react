import api from '../axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BugDetails from '../components/BugDetails'
import Error from '../components/Error'

const Container = styled.div`
  margin: 50px 150px;
`

const BugShow = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const bugId = location.pathname.split('/')[4]
  const [bugDetail, setBugDetail] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const getBugDetail = async () => {
      try {
        const res = await api.get('/projects/' + id + '/bugs/' + bugId)
        setBugDetail(res.data)
      } catch (error) {
        setError(error)
      }
    }

    getBugDetail()
  })

  return (
  <div>
    { error && <Error error={error.message}/> }
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
