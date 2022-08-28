import api from '../axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Bug from './Bug'
import Error from './Error'

const Bugs = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  console.log(id)
  const [bugs, setBugs] = useState([])
  const [error, setError] = useState(false)
  const header = ['Bug ID', 'Title', 'Reporter', 'Assignee', 'Status', 'Deadline', '']

  useEffect(() => {
    const getBugs = async () => {
      try {
        const res = await api.get('/projects/' + id + '/bugs')
        setBugs(res.data)
      } catch (error) {
        setError(error)
      }
    }

    getBugs()
  }, [id])

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
