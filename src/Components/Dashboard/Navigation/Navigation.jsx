import React from 'react'
import { Link } from 'react-router-dom'
import "./navigation.css"

export default function Navigation() {
  return (
    <div className="navigationMain">
        <div className="navLinks">
            <ul>
                 <li><Link to="/">One</Link></li>
                 <li><Link to="/">One</Link></li>
                 <li><Link to="/">One</Link></li>
            </ul>
        </div>
    </div>
  )
}
