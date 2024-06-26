import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    await signup({ fullname, username, email, password, confirmPassword });
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
          <img className='ml-5' width={"300px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="twitter-logo" />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now.</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>Signup</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[80%]'>
            
                  <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Fullname' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
        
                  <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>Create Account</button>
            <h1>Already have an account?<Link to="/login" className='font-bold text-blue-600 cursor-pointer'>Login</Link></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
