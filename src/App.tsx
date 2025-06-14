import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<Events/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
