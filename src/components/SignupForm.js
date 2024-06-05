import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'


const SignupForm = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: "", confirmpassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [accountType, setAccountType] = useState("student")

    const navigate = useNavigate()

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }

        })
    }


    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmpassword) {
            toast.error("Password do not match")
        }
        else {
            setIsLoggedIn(true)
            toast.success("Account Created")
            navigate('/dashboard')
        }

        // Final Object -> final data mei formData bhi rahega + accountType bhi aagaya
        const finalData = {
            ...formData,
            accountType
        }

        console.log(finalData)

    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button onClick={() => setAccountType("student")}
                    className={`${accountType === "student" ?
                        "bg-richblack-900 text-richblack-5" :
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>

                <button onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ?
                        "bg-richblack-900 text-richblack-5" :
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                {/* First and Last Name Container */}
                <div className='flex justify-between gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name <sup className='text-pink-200'>*</sup></p>
                        <input type="text"
                            name='firstname'
                            placeholder='Enter First Name'
                            onChange={changeHandler}
                            value={formData.firstname}
                            required
                            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            p-[12px] border-b-[0.2px] border-richblack-200'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name <sup className='text-pink-200'>*</sup></p>
                        <input type="text"
                            name='lastname'
                            placeholder='Enter Last Name'
                            onChange={changeHandler}
                            value={formData.lastname}
                            required
                            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            p-[12px] border-b-[0.2px] border-richblack-200'
                        />
                    </label>

                </div>

                {/* Email Address container */}
                <div className='mt-[20px]'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Email Address <sup className='text-pink-200'>*</sup></p>
                        <input type="=email"
                            name='email'
                            placeholder='Enter Email Address'
                            onChange={changeHandler}
                            value={formData.email}
                            required
                            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            p-[12px] border-b-[0.2px] border-richblack-200'
                        />
                    </label>

                </div>


                {/* Password and confirm Password container */}
                <div className='flex justify-between gap-x-4 mt-[20px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password <sup className='text-pink-200'>*</sup></p>
                        <input type={showPassword1 ? ("text") : ("password")}
                            name='password'
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            value={formData.password}
                            required
                            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            p-[12px] border-b-[0.2px] border-richblack-200'
                        />
                        <span onClick={() => {
                            setShowPassword1((prev) => !prev)
                        }} className='absolute right-[5px] top-[38px] cursor-pointer'>
                            {showPassword1 ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input type={showPassword2 ? ("text") : ("password")}
                            name='confirmpassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={formData.confirmpassword}
                            required
                            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            p-[12px] border-b-[0.2px] border-richblack-200'
                        />
                        <span onClick={() => {
                            setShowPassword2((prev) => !prev)
                        }} className='absolute right-[5px] top-[38px] cursor-pointer'>
                            {showPassword2 ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                {/* Button */}
                <button className='w-full bg-yellow-50 font-medium text-richblack-900 px-[12px] 
            py-[8px] rounded-[8px] mt-6'>
                    Create Account
                </button>


            </form>
        </div>
    )
}

export default SignupForm

