import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import api from '../axios'

const Container = styled.div`
  margin: 50px 150px;
`

const ProjectEdit = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { projectDetail } = state
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: projectDetail.title,
      description: projectDetail.description
    }
  })

  const editProject = async data => {
    await api.patch('/projects/' + projectDetail.id, data)
    navigate(`/projects/${projectDetail.id}`)
  }

  return (
    <Container>
        <h2>Edit Project</h2>
        <form onSubmit={handleSubmit(editProject)}>
        <div>
            <label>Title</label>  <br />
            <input name='title' {...register('title')} />
        </div>
        <div>
            <label>Description</label> <br />
            <textarea name='description' {...register('description')} />
        </div>
        <button className='btn btn-warning'>Submit</button>
    </form>
    </Container>
  )
}

export default ProjectEdit
