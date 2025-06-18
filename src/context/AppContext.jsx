import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
       
    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

<<<<<<< HEAD
    

=======
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051
    //function to fetch job
    const fetchJobs = async () => {
       setJobs(jobsData)
    }

    useEffect(()=>{
       fetchJobs()
    },[])

    const value = {
        setSearchFilter,searchFilter, 
        isSearched, setIsSearched,
        jobs, setJobs,
<<<<<<< HEAD
        showRecruiterLogin, setShowRecruiterLogin
=======
        showRecruiterLogin, setShowRecruiterLogin,
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051
        
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>

    )
}