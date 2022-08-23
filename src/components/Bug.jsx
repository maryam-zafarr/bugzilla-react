/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Bug = ({ item, id }) => (
  <>
  <td>{item.id}</td>
  <td>{item.title}</td>
  <td>{item.reporter.name}</td>
  <td>{item.assignee_id === null ? 'Pending' : item.assignee.name}</td>
  <td>{item.status}</td>
  <td>{item.deadline}</td>
  <td><Link to={`/projects/${id}/bugs/${item.id}`} className='btn btn-outline-info'>View</Link></td>
  </>
)

export default Bug
