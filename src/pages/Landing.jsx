import { Link } from 'react-router-dom'
import { Navbar } from '../components'
import urbanDesign from '../assets/images/urban-design.svg'

const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <section className="landing">
          <article className="info-section">
            <h1>The Idea</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, delectus ab architecto fugit, hic temporibus aspernatur
              quibusdam ea rerum quia maiores. Dolore placeat porro illum iure
              nobis esse alias dolor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rerum, 🧮 🧑 🍲. <br />
              <br />
            </p>
            <Link to="/register" className="btn">
              Get started 🠖
            </Link>
          </article>
          <img src={urbanDesign} alt="urban design" />
        </section>
      </main>
    </>
  )
}
export default Landing
