
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
          <div className="flex justify-between py-4 px-6 bg-blue-900">
        <h2 className="font-semibold text-2xl ">Media search</h2>
        <div className=" flex gap-5">
          <Link className="bg-white rounded px-3 py-1 text-black active:scale-95" to='/'>Search</Link>
          <Link className="bg-white rounded px-2 py-1 text-black active:scale-95" to='/collection'>Collection</Link>
        </div>
      </div>
  )
}

export default Navbar