import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './shared/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App