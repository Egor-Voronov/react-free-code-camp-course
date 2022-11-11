import { useState } from 'react'
import { About } from './components/About'

function App() {
  return (
    <div className="App flex content-center justify-center relative py-12">
      <div className="wrap w-[500px] h-[868px] flex">
      <About />
      </div>
    </div>
  )
}

export default App
