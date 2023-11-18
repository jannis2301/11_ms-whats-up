import { useState } from 'react'
import { Navbar, Footer } from '../components'

const About = () => {
  const [text, setText] = useState('About')

  const handleClick = () => {
    setText('Page')
  }

  return (
    <>
      <Navbar />
      <main className="main-section full-page">
        <section className="about-section">
          <h1>{text}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla,
            repudiandae reiciendis nemo natus, hic quidem iste blanditiis aut
            obcaecati temporibus sint laudantium porro sunt rem, inventore
            officia? Aut sit vero, numquam in voluptatibus molestiae soluta
            assumenda ullam doloribus dolor! Natus fuga tempora quasi ut,
            aspernatur eligendi hic maxime et?
          </p>
          <button type="button" onClick={handleClick}>
            Click me
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default About
