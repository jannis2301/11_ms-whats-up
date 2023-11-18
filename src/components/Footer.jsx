import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <ul className="footer-links">
          <li>
            <Link to="#">Impressum</Link>
          </li>
          <li>
            <Link to="#">Datenschutz</Link>
          </li>
          <li>
            <Link to="#">FAQ</Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <Link to="#">insta</Link>
          </li>
          <li>
            <Link to="#">fb</Link>
          </li>
          <li>
            <Link to="#">twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
