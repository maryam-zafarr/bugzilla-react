import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Container = styled.div`
  margin: 50px 150px;
`

const BugCreation = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const { register, handleSubmit } = useForm()

  const createBug = async data => {
    await axios.post(
      'http://localhost:3000/api/v1/projects/' + id + '/bugs',
      data
    )
      .then(() => {
        console.log(data)
        window.location = '/projects/' + id + '/bugs'
      })
  }

  return (
    <Container>
        <h2>Add Bug</h2>
        <form onSubmit={handleSubmit(createBug)}>
        <div>
            <label>Title</label>  <br />
            <input name='title' {...register('title')} />
        </div>
        <div>
            <label>Description</label> <br />
            <textarea name='description' {...register('description')} />
        </div>
        <div>
            <label>Type</label> <br />
            <select name='bug_type' {...register('bug_type')}>
              <option value='bug'>Bug</option>
              <option value='feature'>Feature</option>
            </select>
        </div>
        <div>
            <label>Status</label> <br />
            <select name='status' {...register('status')}>
              <option value='new'>New</option>
              <option value='started'>Started</option>
              <option value='resolved'>Resolved</option>
            </select>
        </div>
        <div>
            <label>Deadline</label> <br />
            <input type='date' name='deadline' {...register('deadline')} />
        </div>

        <input type='hidden' value='5' name='reporter_id' {...register('reporter_id')} />

        <button className='btn btn-warning'>Submit</button>
    </form>
    </Container>
  )
}

export default BugCreation
