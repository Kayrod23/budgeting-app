import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/nav.css"

function Nav() {
  return (
    <nav>
        <Link to={"/"}><h1>Budgeting App</h1></Link>
        <div>
          <Link to="/transaction/new"><button>New Transaction</button></Link>
        </div>
    </nav>
  )
}

export default Nav