import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h1>Budgeting App</h1>
        <button><Link to="/transaction/new">New Transaction</Link></button>
    </nav>
  )
}

export default Nav