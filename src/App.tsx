import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Splash from './pages/Splash'
import Product from './pages/Product.tsx'
import Pricing from './pages/Pricing.tsx'
import Contact from './pages/Contact.tsx'
import Demo from './pages/Demo.tsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
