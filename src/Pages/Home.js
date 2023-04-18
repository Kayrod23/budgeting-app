import React from 'react'
import "../Styles/home.css"
// import img from "./alexander-grey-8lnbXtxFGZw-unsplash.jpg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home" >
      <div className="homeCard">
        <h1>Welcome to the Budgeting App</h1>
        <Link to={"/transactions"}><button>View Transactions</button></Link>
      </div>
    </div>
  )
}

export default Home