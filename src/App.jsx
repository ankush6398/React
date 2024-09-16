import React from 'react'
import Background  from './compoenets/Background'
import Foreground from './compoenets/Foreground'

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-900'>
       <Background/>
       <Foreground/>
    </div>
  )
}

export default App