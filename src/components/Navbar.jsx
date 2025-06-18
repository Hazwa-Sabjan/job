<<<<<<< HEAD
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
=======
import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Navigate } from "react-router-dom";

=======
>>>>>>> ccab6974112f88afbc0f7d9f4db5fa22c567b990
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051

const Navbar = () => {
   const {openSignIn} = useClerk()
   const {user} = useUser()

   const navigate = useNavigate()
<<<<<<< HEAD

   const { setShowRecruiterLogin } = useContext(AppContext)


    return(
        <div className="shadow py-4">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img onClick={()=> navigate('/')} className="cursor-pointer" src={assets.logo} alt="" />
=======
    return(
        <div className="shadow py-4">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img src={assets.logo} alt="" />
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051
                {
                    user
                    ?<div className="flex items-center gap-3">
                        <Link to={'/applications'}>Applied Jobs</Link>
                        <p>|</p>
                        <p className="max-sm:hidden">Hi, {user.firstName+" "+user.lastName}</p>
                        <UserButton />
                    </div>
                    :<div className="flex gap-4 max-sm:text-xs">
<<<<<<< HEAD
                    <button onClick={e=> setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>
=======
                    <button onClick={ e => setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>
>>>>>>> f7cc994cf5142c0d06d77844ef12f62b6e9ef051
                    <button onClick={ e => openSignIn()} className="bg-blue-600 text-white sm:px-9 py-2 rounded-full">Login</button>
                </div>
                }
                
            </div>
        </div>
    )
}
export default Navbar