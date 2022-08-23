import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Bug from './Bug'

const Bugs = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  console.log(id)
  const [bugs, setBugs] = useState([])

  useEffect(() => {
    const getBugs = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/v1/projects/' + id + '/bugs'
        )
        setBugs(res.data)
      } catch (err) {}
    }

    getBugs()
  }, [id])

  return (
    <div>
      <table className='table'>
        <thead>
          <tr className='head-row'>
            <td>Bug ID</td>
            <td>Title</td>
            <td>Reporter</td>
            <td>Assignee</td>
            <td>Status</td>
            <td>Deadline</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {bugs.map(item => (
            <tr key={item.id}>
              <Bug item={item} id={id}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Bugs
