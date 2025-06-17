import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
<<<<<<< HEAD
import RecruiterLogin from './components/RecruiterLogin'
=======
>>>>>>> bda88c1 (initial commit)


const App = () => {

<<<<<<< HEAD
  const {showRecruiterLogin} =  useContext(AppContext)

  return (
    <div>
     {showRecruiterLogin && <RecruiterLogin />}
=======
  

  return (
    <div>
   
>>>>>>> bda88c1 (initial commit)
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/apply-job/:id' element={<ApplyJob />} />
          <Route path='/applications' element={<Applications />} />

        
      </Routes>
    </div>
  )
}

export default App