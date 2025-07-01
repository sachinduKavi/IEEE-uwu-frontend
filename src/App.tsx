import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'

import OpenDay from "./pages/Openday/OpenDay.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
