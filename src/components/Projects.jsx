import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Project from './Project'
import '../App.css'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/projects'
        )
        setProjects(res.data)
      } catch (err) {}
    }

    getProjects()
  }, [])

  return (
    <div>
      <table className='table'>
        <thead>
          <tr className='head-row'>
            <td>Project ID</td>
            <td>Title</td>
            <td>Project Manager</td>
            <td>Team Members</td>
            <td>Bugs</td>
            <td></td>
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
