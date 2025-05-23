import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Compoinent imports
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" App bg-gray-500 min-h-screen w-full " >
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App
