import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div id='content'>
    <p>Home</p>
    <Link to='/about'>About</Link>
  </div>
)
