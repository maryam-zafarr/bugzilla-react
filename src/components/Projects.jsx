import api from '../axios'
import React, { useEffect, useState } from 'react'
import Project from './Project'
import '../App.css'
import Error from './Error'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(false)
  const header = ['Project ID', 'Title', 'Project Manager', 'Team Members', 'Bugs', '']

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await api.get('/projects')
        setProjects(res.data)
      } catch (error) {
        setError(error)
      }
    }

    getProjects()
  }, [])

  return (
    <div>
      { error && <Error error={error.message}/> }
      <table className='table'>
        <thead>
          <tr className='head-row'>
            {header.map(item => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map(item => (
            <tr key={item.id}>
              <Project item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Projects
