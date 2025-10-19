import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'

import OpenDay from "./pages/Openday/OpenDay.tsx";
import CSchapter from "./pages/CSchapter/CSchapter.tsx";
import ScrollToTop from './components/ScrollTop.tsx';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
        <Route path='/CS' element={<CSchapter/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
