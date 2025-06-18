<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { use } from 'react'
import { AppContext } from './context/AppContext'

const App = () => {

 const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
   
        { showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/apply-job/:id' element={<ApplyJob />} />
          <Route path='/applications' element={<Applications />} />
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
<<<<<<< HEAD
// import ApplyJob from './pages/ApplyJob'000000000000
=======
// import ApplyJob from './pages/ApplyJob'
>>>>>>> ccab6974112f88afbc0f7d9f4db5fa22c567b990
import Applications from './pages/Applications'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'



const App = () => {



  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home />} />
         {/* <Route path='/apply-job/:id' element={<ApplyJob />} /> */}
          <Route path='/applications' element={<Applications />} />
          <Route path='/dashboard' element={<Dashboard />} />
<<<<<<< HEAD
          <Route path='/dashboard/add-job' element={<AddJob />} />
          <Route path='/dashboard/manage-jobs' element={<ManageJobs />} />
          <Route path='/dashboard/view-applications' element={<ViewApplications />} />
=======
          <Route path='add-jobs' element={<AddJob />} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-applications' element={<ViewApplications />} />
>>>>>>> ccab6974112f88afbc0f7d9f4db5fa22c567b990
        
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051

        
      </Routes>
    </div>
  )
}

export default App