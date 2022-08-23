/* eslint-disable react/prop-types */
import React from 'react'

const Team = ({ item }) => (
  <>
  <li>{item.name} ({item.user_type})</li>
  </>
)

export default Team
