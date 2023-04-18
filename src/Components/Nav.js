import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/nav.css"

function Nav() {
  return (
    <nav>
        <h1>Budgeting App</h1>
        <div>
          <Link to="/transaction/new"><button>New Transaction</button></Link>
        </div>
    </nav>
  )
}

export default Nav