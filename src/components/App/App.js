import React from 'react'
import { Link } from 'react-router'

const App = props => (
  <div>
    <h1 id='title'>App Title</h1>
    <ul>
      <li><Link to='/foo'>foo</Link></li>
      <li><Link to='/bar'>bar</Link></li>
      <li><Link to='/counter'>counter</Link></li>
    </ul>
    { props.children }
  </div>
)

export default App
