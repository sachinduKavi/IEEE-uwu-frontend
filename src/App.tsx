import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'

import OpenDay from "./pages/Openday/OpenDay.tsx";
import ScrollToTop from './components/ScrollTop.tsx';
import Wie from "./pages/WIE/wie.tsx";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
        <Route path='/wie' element={<Wie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
