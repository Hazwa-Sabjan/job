import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import ApplyJob from './pages/ApplyJob'000000000000
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
          <Route path='/dashboard/add-job' element={<AddJob />} />
          <Route path='/dashboard/manage-jobs' element={<ManageJobs />} />
          <Route path='/dashboard/view-applications' element={<ViewApplications />} />
        

        
      </Routes>
    </div>
  )
}

export default App