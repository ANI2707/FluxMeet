import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPgae = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
        <SignUp/>
    </main>
  )
}

export default SignUpPgae