import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alummi' element={"Allummi"} />
        <Route path='/event' element={"events"} />
        <Route path='/news' element={"news"} />
        <Route path='/notice' element={"notice"} />
        <Route path='/articles' element={"articles"} />
        <Route path='/download' element={"download"} />
      </Routes>
    </div>
  )
}

export default App
