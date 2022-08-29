import api from '../axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProjectDetails from '../components/ProjectDetails'
import Error from '../components/Error'

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
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProjectDetail = async () => {
      try {
        const res = await api.get('/projects/' + id)
        setProjectDetail(res.data)
      } catch (error) {
        setError(error)
      }
    }

    getProjectDetail()
  })

  const deleteProject = async () => {
    try {
      await api.delete('/projects/' + id)
    } catch (error) {
      setError(error)
    }

    navigate('/projects')
  }

  return (
  <div>
    { error && <Error error={error.message}/> }
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
