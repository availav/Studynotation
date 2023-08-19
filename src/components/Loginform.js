// import React, { useState } from 'react'
// import { toast } from 'react-hot-toast'
// import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
// import { Link, useNavigate } from 'react-router-dom'
// const Loginform = ({setIsLoggedin}) => {
//     const navigate = useNavigate();
//     const[formData,setFormData]= useState({email:"" ,
//               password:""})
// const[showPassword,setShowPassword]=useState (false);             

//     function changehandler(event){
//         setFormData(prevData=>{
//           return  {   ...prevData,
//             [event.target.name]:event.target.Value
//         }
//         } )
//     }   
    
//     function submithandler(event){
//         event.preventDefault();
//         setIsLoggedin(true);
//         toast.success("logged in");
//         navigate("/dashboard");

//     }






//   return (
//     <form onSubmit={submithandler}>
//         <label>
//             <p>Email Address<sup>*</sup></p>
//             <input
//             required
//             type="email"
//             value={formData.email}
//             onChange={changehandler}
//             placeholder="enter email id"
//             name='email'>

//             </input>
//         </label>
//         <label>
//             <p>Password<sup>*</sup></p>
//             <input
//             required
//             type={showPassword ? ("text"):("password")}
//             value={formData.password}
//             onChange={changehandler}
//             placeholder="enter password"
//             name='password'>

//             </input>
//             <span onClick={()=>setShowPassword((prev)=>!prev)}>
//                 {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
//             </span>
//             <Link to="/">
//                 <p>Forgot password</p>
//             </Link>
//         </label>

//         <button>
//             Sign In
//         </button>
//     </form>
//   )
// }

// export default Loginform









import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm

