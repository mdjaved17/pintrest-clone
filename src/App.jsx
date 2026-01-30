import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className=' min-h-screen w-full bg-gray-950 text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      <Footer />

      
    </div>
  )
}

export default App

