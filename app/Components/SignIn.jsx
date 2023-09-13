import React from 'react'
import { Button } from '@material-tailwind/react'
import { UserAuth } from '../context/AuthContext'
const SignIn = () => {
  const {googleSignIn} = UserAuth();
  const handleSignIn = async() =>{
    try{
      await googleSignIn()
    }catch(err){
      console.log(err);
    }
  }
  return (

    <div className='h-full w-full items-center justify-center flex flex-col pt-44'>
      <div className='flex items-center justify-center flex-col my-auto mx-auto'>
      <img src="https://www.dignited.com/wp-content/uploads/2020/04/Google-Docs-Header-1280x720-1-1024x576.png" alt="" className='w-3/4 md:w-1/3'/>
      <Button onClick={handleSignIn} className=' mt-5 rounded bg-blue-600 text-white'>Login</Button>
      </div>
      <div className='mt-20'>
        <p className='text-sm text-gray-500'>A clone by Dipen Kalsi ❤️</p>
      </div>
    </div>
  )
}

export default SignIn
