// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from "../assets/Logo.svg"
// import { useState } from 'react'
// import { toast } from 'react-hot-toast'


// const Navbar = (props) => {
//     let isLoggedIn= props.isLoggedIn;
//     let setIsLoggedin=props.setIsLoggedin;
//   return (
//     <div className="flex justify-evenly">
//      <Link to="/">
//      <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
//      </Link>
//      <nav>
//         <ul className="flex gap-5">
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/">About</Link>
//             </li>
//             <li>
//                 <Link to="/">contact</Link>
//             </li>
//         </ul>
//      </nav>
//      {/* log in signup logout dashboard */}
//      <div className='flex ml-6 mr-3 gap-3'>
//         { !isLoggedIn &&
//             <Link to="/login">
//                 <button>login</button>
//             </Link>
//         }
//         { !isLoggedIn &&
//             <Link to="/signup">
//                 <button >Signup</button>
//             </Link>
//         }
//          {isLoggedIn &&
//             <Link to="/">
//                 <button onClick={()=>{
//                      setIsLoggedin(false)
//                     toast.success("logged out ho gye");

//                 }}>logout</button>
//             </Link>
//         }
//         { isLoggedIn &&
//             <Link to="/dashboard">
//                 <button>Dashboard</button>
//             </Link>
//         }
//      </div>

     
        
     
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.error("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar

