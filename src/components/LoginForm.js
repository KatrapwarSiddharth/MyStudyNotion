import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevDate) => ({
            ...prevDate,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </p>
                <input type="email"
                    name='email'
                    placeholder='Enter Email address'
                    onChange={changeHandler}
                    value={formData.email}
                    required
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                    p-[12px] border-b-[0.2px] border-richblack-200'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-200'>*</sup>
                </p>
                <input type={showPassword ? ("text") : ("password")}
                    name='password'
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    value={formData.password}
                    required
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                    p-[12px] border-b-[0.2px] border-richblack-200'
                />

                <span onClick={() => { (setShowPassword((prev) => !prev)) }}
                    className='absolute right-[3.2px] top-[38px] cursor-pointer'>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p className='text-right text-xs mt-1 text-blue-100'>Forgot Password?</p>
                </Link>
            </label>



            <button className='w-full bg-yellow-50 font-medium text-richblack-900 px-[12px] 
            py-[8px] rounded-[8px] mt-6'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
