import React from 'react'
import { Link } from 'react-router-dom'

import css from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={css.wrapper}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
        <li>
          <Link to={`/${Math.random()}`}>Dummy</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
