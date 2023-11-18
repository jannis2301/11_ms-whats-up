import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <section className="full-page grid-center">
      <div className="error-page">
        <img src={img} alt="not found" style={{ maxWidth: 640 }} />
        <h3>Ohh! page not found</h3>
        <p>We can't find the page you are looking for</p>
        <Link to="/">back home</Link>
      </div>
    </section>
  )
}
export default Error
