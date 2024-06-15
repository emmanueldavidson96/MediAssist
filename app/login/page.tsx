import React from 'react'
import InputFieldUsernameFloatingLabel from '../_components/_ui/InputFieldUsernameFloatingLabel'
import InputFieldPasswordFloatingLabel from '../_components/_ui/InputFieldPasswordFloatingLabel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='w-[90%] m-auto h-screen flex items-center justify-center mt-[-100px]'>
        <form className='w-[50%] h-fit flex flex-col gap-2 shadow-sm items-center'>
            <h1 className='text-2xl font-semibold '>Log In</h1>
            <InputFieldUsernameFloatingLabel />
            <InputFieldPasswordFloatingLabel />
            <Link href="/profile" className='w-full'>
                <Button className='w-full bg-blue-500 hover:bg-blue-700'>
                    Log In
                </Button>            
            </Link>
        </form>
    </div>
  )
}
