
import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { use } from 'react'
import { AppContext } from './context/AppContext'




const App = () => {



  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home />} />
         {/* <Route path='/apply-job/:id' element={<ApplyJob />} /> */}
          <Route path='/applications' element={<Applications />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/dashboard/add-job' element={<AddJob />} />
          <Route path='/dashboard/manage-jobs' element={<ManageJobs />} />
          <Route path='/dashboard/view-applications' element={<ViewApplications />} />

          <Route path='add-jobs' element={<AddJob />} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-applications' element={<ViewApplications />} />

        


        
      </Routes>
    </div>
  )
}

export default App