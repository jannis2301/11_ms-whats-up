import { Navbar, Footer, Club } from '../components'
import { clubs } from '../data'

const Clubs = () => {
  return (
    <>
      <Navbar />
      <main className="main-section full-page pt-20">
        <h1>Clubs & Bars</h1>
        <Club clubs={clubs} />
        {/* <Categories /> */}
        {/* <Overlay /> */}
      </main>
      <Footer />
    </>
  )
}

export default Clubs
