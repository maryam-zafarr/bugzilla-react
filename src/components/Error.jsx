import React, { useState } from 'react'
import { Alert, Collapse } from '@mui/material'

const Error = props => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Collapse in={open}><Alert onClose={() => { setOpen(false) }} severity='error'>{props.error}</Alert></Collapse>
    </div>
  )
}

export default Error
