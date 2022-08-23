/* eslint-disable react/prop-types */
import React from 'react'
import Team from './Team'

const ProjectDetails = props => (
    <div>
      <p><b>About the Project: </b>{props.description}</p>
      <p><b>Manager: </b>{props.manager && props.manager.name}</p>
      <p><b>Team:</b></p>
      {props.users && props.users.map(item => (
            <ul key={item.id}>
              <Team item={item} />
            </ul>
      ))}
      <p><b>Total Bugs: </b>{props.bugs && props.bugs.length}</p>
    </div>
)

export default ProjectDetails
