import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Events from './components/Events'

function App() {

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
