// server side (unless "use client")

import React from 'react'
import Login from '@/components/Login'
import { ApiClient } from '../../../apiclient/client'
// import { useRouter } from 'next/navigation'

const page = () => {
  // const router = useRouter();
  return (
    <div> 
      <Login />
      
    </div>

  )
}



export default page