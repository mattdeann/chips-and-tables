import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">Logo </Link>
      <p className="site-title">Site Title</p>
    </header>
  )
}
