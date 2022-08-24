import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProjectDetails from '../components/ProjectDetails'

const Container = styled.div`
  margin: 50px 150px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
`
const Right = styled.div`
`

const ProjectShow = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const navigate = useNavigate()
  const [projectDetail, setProjectDetail] = useState([])

  useEffect(() => {
    const getProjectDetail = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/projects/' + id
        )
        setProjectDetail(res.data)
      } catch (err) {}
    }

    getProjectDetail()
  }, [id])

  const deleteProject = async () => {
    await axios.delete(
      'http://localhost:3000/api/v1/projects/' + id
    )
    window.location = '/projects'
  }

  return (
  <div>
    <Navbar />
    <Container>
      <Wrapper>
        <Left>
          <h1>{projectDetail.title}</h1>
        </Left>
        <Right>
          <button to ='/' className='btn btn-outline-info' onClick={() => navigate(`/projects/${id}/edit`, { state: { projectDetail } })}>Edit Project</button> &nbsp;
          <button to ='/' className='btn btn-outline-danger' onClick={deleteProject}>Delete Project</button>
        </Right>
      </Wrapper>
      <ProjectDetails
        description = {projectDetail.description}
        manager = {projectDetail.manager}
        users = {projectDetail.users}
        bugs = {projectDetail.bugs}
      />
      <Link to={`/projects/${id}/bugs`} className='btn btn-dark'>View Bugs</Link>
    </Container>
  </div>
  )
}

export default ProjectShow
