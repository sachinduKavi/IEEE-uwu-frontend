import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Events from './components/Events'
import OpenDay from "./pages/Openday/OpenDay.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
