import { Navbar, Activities, Footer } from '../components'
import { activities } from '../data'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <Activities activities={activities} />
      </main>
      <Footer />
    </>
  )
}
export default Home
