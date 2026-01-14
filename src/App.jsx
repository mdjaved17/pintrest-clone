import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Routes,Route } from "react-router-dom"
const App = () => {
  return (
    <div className=' min-h-screen w-full bg-gray-950 text-white'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>

      
    </div>
  )
}

export default App

