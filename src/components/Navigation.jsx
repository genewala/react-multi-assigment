import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation"

const Navigation = () => {
  return (
    <header  className="main-header">
        <nav>
            <ul className="main-list" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="aboutme">About Me</Link></li>
                <li><Link to="/contact">Skills</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation
