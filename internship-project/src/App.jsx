import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
import Login from './pages/Login'
import FormikForm from './Formik/FormikForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <FormikForm />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/alummi' element={"Allummi"} />
        <Route path='/event' element={"events"} />
        <Route path='/news' element={"news"} />
        <Route path='/notice' element={"notice"} />
        <Route path='/articles' element={"articles"} />
        <Route path='/download' element={"download"} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
