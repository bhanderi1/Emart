import React, { useState } from 'react'

const User_Page = () => {

  const [user , setUser] = useState('')



  return (
    <div className='bg-gray-500 bg-opacity-25  h-screen w-[100%] justify-center items-center'>
      <div className=' p-2 h-[300px] w-[300px] '>
        {/* <div>
          <label htmlFor="UserName">UserName</label>
          <input type="text" id='name' name='name' />
        </div> */}
        <div className='mb-[15px]'>
          <label htmlFor="UserName">Username or Email</label><br/>
          <input type="email" id='email' name='email' className='py-[6px] w-[100%]'/>
        </div>
        <div  className='mb-[15px] '>
          <label htmlFor="UserName">Password</label><br/>
          <input type="password" name='password' id="password" className='py-[6px] w-[100%]'/>
        </div>
        <div >
        <button className='bg-black text-white py-[10px] w-[100%]' onClick={handelLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}
export default User_Page