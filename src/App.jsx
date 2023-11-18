import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Register, Landing, Error, About, Clubs, Contact } from './pages'

function App() {
  return (
    <BrowserRouter basename="/ms-whats-up">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
