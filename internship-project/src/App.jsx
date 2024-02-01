import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Login from './pages/Login'
import FormikForm from './Formik/FormikForm'
import OnlineAddmissionForm from './collegeform/onlineAddmissionForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/online-addmission-form' element={<OnlineAddmissionForm />} />
        <Route path='/event' element={"events"} />
        <Route path='/news' element={"news"} />
        <Route path='/notice' element={"notice"} />
        <Route path='/articles' element={"articles"} />
        <Route path='/download' element={"download"} />
        <Route path='/login' element={<FormikForm />} />
      </Routes>
    </div>
  )
}

export default App
