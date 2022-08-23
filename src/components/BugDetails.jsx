/* eslint-disable react/prop-types */
import React from 'react'

const BugDetails = props => (
    <div>
      <p><b>About the Bug: </b>{props.description === '' ? 'None' : props.description}</p>
      <p><b>Type: </b>{props.bug_type}</p>
      <p><b>Status:</b>{props.status}</p>
      <p><b>Assignee: </b>{props.assignee && props.assignee.name}</p>
      <p><b>Reporter: </b>{props.reporter && props.reporter.name}</p>
      <p><b>Deadline: </b>{props.deadline}</p>
    </div>
)

export default BugDetails
