import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navigation"

const Navigation = () => {
  return (
    <header  className={classes.header}>
        <nav>
            <ul className={classes.list} >
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
