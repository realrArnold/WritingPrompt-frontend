import React from 'react'
import Signup from '@/components/Signup'
import { ApiClient } from '../../../apiclient/client'
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <Signup />
    </>
  )
}

export default page
