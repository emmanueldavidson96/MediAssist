import React from 'react'
import InputFieldFloatingLabel from '../_components/_ui/InputFieldFloatingLabel'
import InputFieldUsernameFloatingLabel from '../_components/_ui/InputFieldUsernameFloatingLabel'
import InputFieldPasswordFloatingLabel from '../_components/_ui/InputFieldPasswordFloatingLabel'
import { Button } from '@/components/ui/button'

export default function Signup() {
  return (
    <div className='w-[90%] m-auto h-screen flex items-center justify-center mt-[-100px]'>
        <form className='w-[50%] h-fit flex flex-col gap-4 shadow-sm items-center p-4'>
            <h1 className='text-3xl font-bold '>Sign Up</h1>
            <InputFieldFloatingLabel  />
            <InputFieldUsernameFloatingLabel />
            <InputFieldPasswordFloatingLabel />
            <Button className='w-full bg-blue-500 hover:bg-blue-700'>
                Sign Up
            </Button>
        </form>
    </div>
  )
}
