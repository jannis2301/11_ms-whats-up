import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './index'

const Navbar = () => {
  const header = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const updateHeaderHeight = () => {
    const headerHeight = header.current.getBoundingClientRect().height
    document.documentElement.style.setProperty(
      '--header-height',
      `${headerHeight}px`
    )
  }

  useEffect(() => {
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [header])

  return (
    <header className="header" ref={header}>
      <nav className="nav">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <ul className={`nav-ul ${showMenu ? 'show' : ''}`}>
          <li className="nav-li">
            <Link className="nav-link" to="/add-activity">
              Add Activity
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/about">
              About us
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/register">
              Sign in
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={`hamburger-menu  ${showMenu ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
export default Navbar
