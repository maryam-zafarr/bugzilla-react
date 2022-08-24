import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Project = ({ item }) => (
    <>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.manager.name}</td>
      <td>{item.users.length}</td>
      <td>{item.bugs.length}</td>
      <td><Link to={`/projects/${item.id}`} className='btn btn-outline-info'>View</Link></td>
    </>
)

export default Project
