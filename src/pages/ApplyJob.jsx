import React from 'react'
import Loading from '../components/Loading'



const ApplyJob = () => {
   const { id } = useParams()
  const [JobData,setJobData] = useState(null)
  const { jobs } = useContext(AppContext)
  const fetchJob = async ()=> {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0){
      setJobData(data[0])
      console.log(data[0])
    }
  }
useEffect(()=>{
fetchJob()
  },[id])
  return JobData ? (
<>
<Navbar/>
<div>
  <div>
    <div>
      <div>
        <img src={assets.company_icon} alt="" />
        <div>
          <h1>{JobData.title}</h1>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  ) : (
  
    <Loading />
  )
}



export default ApplyJob