import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'

import OpenDay from "./pages/Openday/OpenDay.tsx";
import ScrollToTop from './components/ScrollTop.tsx';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
