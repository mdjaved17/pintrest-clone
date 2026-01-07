import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  return (
    <div className=' h-screen w-full bg-gray-950 text-white'>
      <button onClick={async()=>{
        const data= await fetchPhotos('dog');
        console.log(data.results);
      }} className='p-3 bg-amber-400'> Get Data</button>
    </div>
  )
}

export default App

