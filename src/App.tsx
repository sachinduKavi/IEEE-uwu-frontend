import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Events from './components/Events'
import OpenDay from "./pages/Openday/OpenDay.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ChaptersSection from "./components/Chapters.tsx";
import AboutSection from "./components/AboutSection.tsx";
import UpcomingEventSection from "./components/UpcomingEventSection.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/chapter' element={<ChaptersSection/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/upcomingevent' element={<UpcomingEventSection/>}/>
        <Route path='/openDay' element={<OpenDay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
